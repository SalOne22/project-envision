import movieCardMarkup from '../../markup/movieCardMarkup';
import initRatings from '../../utils/initRating';
import { onOpenModalFilmById } from '../../modals/modal_film';

export default function makeMovieList(moviesToShow, movieListEl) {
  movieListEl.innerHTML = moviesToShow.map(movieCardMarkup).join('');
  initRatings();

  movieListEl.addEventListener('click', e => {
    const closestId = e.target.closest('.m-modal');
    if (!closestId) return;
    const movieId = closestId.dataset.id;
    onOpenModalFilmById(movieId);
  });
}
