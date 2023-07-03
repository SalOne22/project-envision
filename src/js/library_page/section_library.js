import customSelect from 'custom-select';

import movieCardMarkup from 'js/markup/movieCardMarkup';
import populateOptions from 'js/utils/populateOptions';
import loaderWrapper from 'js/loader';
import initRatings from 'js/utils/initRating';
import refs from 'js/refs/library-refs';

import { loadMovies } from 'js/api/libraryAPI';
import { onOpenModalFilmById } from 'js/modals/modal_film';

import data from 'js/genres.json';
import 'custom-select/build/custom-select.css';

const PAGE_SIZE = 9;
let page = 1;

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateOptions(data.genres, refs.genresSelectEl);
  initLibrary();

  const genreSelect = customSelect(refs.genresSelectEl)[0];

  genreSelect.select.addEventListener('change', filterMoviesByGenre);
  refs.loadMoreBtnEl.addEventListener('click', onLoadMore);
}

function appendMoviesToLibrary(movies) {
  refs.moviesListEl.insertAdjacentHTML(
    'beforeend',
    movies.map(movieCardMarkup).join('')
  );
  refs.moviesListEl.dataset.page = page;
  initRatings();
}

async function initLibrary() {
  const movies = await loaderWrapper(loadMovies(PAGE_SIZE));

  if (movies.length === 0) {
    refs.emptyLibEl.classList.remove('is-hidden');
    refs.libCatalogEl.classList.add('is-hidden');
    return;
  }

  if (movies.length < PAGE_SIZE) {
    refs.loadMoreBtnEl.classList.add('is-hidden');
  }

  appendMoviesToLibrary(movies);

  // START Добавляем слушателя для открытия модалки
  const catalog = document.querySelector('.list-movie-card.js-gallery');
  catalog.addEventListener('click', e => {
    const closestId = e.target.closest('.m-modal');
    if (!closestId) return;
    const movieId = closestId.dataset.id;
    onOpenModalFilmById(movieId);
  });
  // END
}

function filterMoviesByGenre(evt) {
  const movies = refs.moviesListEl.childNodes;
  let filter = evt.target.value;

  if (filter === '-1') {
    movies.forEach(movie => movie.classList.remove('is-hidden'));
  } else {
    movies.forEach(movie => {
      movie.dataset.genres.split(',').includes(filter)
        ? movie.classList.remove('is-hidden')
        : movie.classList.add('is-hidden');
    });
  }
}

async function onLoadMore() {
  resetSelect();
  const movies = await loaderWrapper(loadMovies(PAGE_SIZE, page));

  if (movies.length < PAGE_SIZE) {
    refs.loadMoreBtnEl.classList.add('is-hidden');
  }

  page += 1;

  appendMoviesToLibrary(movies);
}

function resetSelect() {
  refs.genresSelectEl.customSelect.value = '-1';
  const evt = new Event('change');
  refs.genresSelectEl.dispatchEvent(evt);
}
