import { Notify } from 'notiflix';
import customSelect from 'custom-select';
import Pagination from '../utils/pagination';
import { refs } from './catalog-refs';
import { makeMovieList, updateMovieList } from '../components/MovieList';
import { fetchMoviesOfWeek } from '../api/catalogAPI';
import populateOptions from '../utils/populateOptions';
import getYears from '../utils/getYears';
import { Search } from './search';
import dataGenres from '../genres.json';
import 'custom-select/build/custom-select.css';
import noMovieMarkup from '../markup/noMovieMarkup';
import { Filter } from './filter';

const START_YEAR = 1895;
const MAX_PAGES = 500;

const updateGalleryOfWeek = makeUpdateGallery(getMoviesOfWeek);
const updateGalleryBySearch = makeUpdateGallery(getMoviesBySearch);
const updateGalleryByFilter = makeUpdateGallery(getMoviesByFilter);

const pagination = new Pagination({
  container: refs.paginationContainer,
  count: MAX_PAGES,
  index: 1,
  callback: updateGalleryOfWeek,
});

const search = new Search({});
const genreFilter = new Filter({});

window.addEventListener('DOMContentLoaded', init);

function noMovie() {
  refs.paginationContainer.innerHTML = '';
  refs.gallery.innerHTML = noMovieMarkup();
}

function onFilterMoviesByGenre(evt) {
  let filter = evt.target.value;

  if (filter === '-1') return updateGalleryOfWeek(1);

  genreFilter.filter = filter;

  updateGalleryByFilter(1);
}

function onSearchInput(evt) {
  const value = evt.target.value.trim();

  if (value) {
    refs.clearBtn.classList.add('is-active');
  }

  if (!value) {
    refs.clearBtn.classList.remove('is-active');
    updateGalleryOfWeek(1);
  }
}

function onClearBtnClick() {
  refs.searchInput.value = '';
  refs.clearBtn.classList.remove('is-active');
  updateGalleryOfWeek(1);
}

function onSearch(event) {
  event.preventDefault();
  const query = refs.searchInput.value.trim();

  if (!query) {
    updateGalleryOfWeek(1);
    return Notify.failure('Type something, please.');
  }

  search.query = query;
  updateGalleryBySearch(1);
}

async function getMoviesOfWeek(currentPage) {
  let result = await fetchMoviesOfWeek(currentPage);

  if (result.total_results === 0) {
    noMovie();
    return null;
  }

  updatePagination(result, updateGalleryOfWeek);

  return result;
}

async function getMoviesBySearch(currentPage) {
  search.page = currentPage;
  const result = await search.searchMovie();

  if (!result || result.total_results === 0) {
    noMovie();
    return null;
  }

  updatePagination(result, updateGalleryBySearch);

  return result;
}

async function getMoviesByFilter(currentPage) {
  genreFilter.page = currentPage;
  const result = await genreFilter.searchMovie();

  if (!result || result.total_results === 0) {
    noMovie();
    return null;
  }

  updatePagination(result, updateGalleryByFilter);

  return result;
}

function makeUpdateGallery(callback) {
  return async function (currentPage) {
    let result = await callback(currentPage);
    if (result === null) return;

    updateMovieList(result.results, refs.gallery);
  };
}

async function init() {
  populateOptions(getYears(START_YEAR), refs.yearSelectEl);
  populateOptions(dataGenres.genres, refs.genreSelectEl);

  const yearSelect = customSelect(refs.yearSelectEl)[0];
  const genresSelect = customSelect(refs.genreSelectEl)[0];

  yearSelect.select.addEventListener(
    'change',
    evt => (search.year = genreFilter.year = evt.target.value)
  );
  genresSelect.select.addEventListener('change', onFilterMoviesByGenre);

  refs.searchInput.addEventListener('input', onSearchInput);
  refs.clearBtn.addEventListener('click', onClearBtnClick);
  refs.form.addEventListener('submit', onSearch);

  let result = await getMoviesOfWeek(1);
  if (result === null) return;

  makeMovieList(result.results, refs.gallery);
}

function updatePagination(props, callback) {
  pagination.pageCount = Math.min(props.total_pages, MAX_PAGES);
  pagination.callBack = callback;
  pagination.pageIndex = props.page;

  pagination.render();
}
