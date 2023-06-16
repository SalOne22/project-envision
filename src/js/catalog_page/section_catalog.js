import { Notify } from 'notiflix';
import axios from 'axios';
import initRatings from '../utils/initRating';
import movieCardMarkup from '../markup/movieCardMarkup';
import Pagination from '../utils/pagination';
import { API_KEY, URL } from '../api/catalogAPI';
import { refs } from './catalog-refs';
import { onOpenModalFilmById } from '../modals/modal_film.js';

const MAX_PAGES = 197;

export async function fetchMoviesOfWeek(currentPage) {
  try {
    const { data } = await axios.get(
      `${URL}trending/all/week?language=en-US&page=${currentPage}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          accept: 'application/json',
        },
      }
    );
    return data;
  } catch (error) {
    Notify.failure(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  }
}

export function buildGallery(movies) {
  return movies
    .map(movie => {
      if (movie.release_date) return movieCardMarkup(movie);
      return '';
    })
    .join('');
}

function noMovie() {
  refs.paginationContainer.innerHTML = '';
  refs.gallery.innerHTML = `
    <div class="gallery-empty"
        <p class="text-empty">OOPS...<br>
        We are very sorry!<br>
        We don’t have any results matching your search.
        </p>
    </div>   
    `;
}

export async function galleryOfWeek(currentPage) {
  try {
    let result = await fetchMoviesOfWeek(currentPage);
    const addingMovies = buildGallery(result.results);
    refs.gallery.innerHTML = addingMovies;
    initRatings();
    if (result.total_results === 0) {
      return noMovie();
    }
  } catch (error) {
    console.error(error);
  }
}

initGalleryOfWeek();

async function initGalleryOfWeek() {
  try {
    let result = await fetchMoviesOfWeek(1);
    const addingMovies = buildGallery(result.results);
    refs.gallery.innerHTML = addingMovies;

    // START Добавляем слушателя для открытия модалки
    const catalog = document.querySelector('#anchor');
    catalog.addEventListener('click', e => {
      const closestId = e.target.closest('.m-modal');
      if (!closestId) return;
      const movieId = closestId.dataset.id;
      onOpenModalFilmById(movieId);
    });
    // END

    initRatings();
    if (result.total_results === 0) {
      return noMovie();
    }
    paginationWeek(result);
  } catch (error) {
    console.error(error);
  }
}

function paginationWeek(props) {
  new Pagination({
    container: refs.paginationContainer,
    count: Math.min(props.total_pages, MAX_PAGES),
    index: 1,
    callback: galleryOfWeek,
  });
}
