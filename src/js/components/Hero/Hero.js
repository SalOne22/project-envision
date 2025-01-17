import heroMarkup from 'js/markup/heroMarkup.js';
import loaderWrapper from 'js/loader.js';

import { fetchTrendingMoviesByDay } from 'js/api/fetch-api.js';
import { onTrailerBtnClick } from 'js/modals/modal_trailer.js';
import { heroRefs } from 'js/refs/hero-refs.js';
import { onOpenModalFilmById } from 'js/modals/modal_film.js';

const MAX_TRENDING_MOVIES = 20;
const NUMBER_OF_STARS = 10;

const markupRandomTrendingMovie = async () => {
  const randomNum = Math.floor(Math.random() * MAX_TRENDING_MOVIES);

  try {
    const { results } = await loaderWrapper(fetchTrendingMoviesByDay());

    const { id, title, overview, backdrop_path, vote_average } =
      results[randomNum];

    const ratingValue = vote_average * NUMBER_OF_STARS;

    heroRefs.heroContainer.innerHTML = heroMarkup({
      id,
      title,
      overview,
      ratingValue,
      backdrop_path,
    });

    const trailerBtn = document.getElementById('watch-trailer');
    trailerBtn.addEventListener('click', e => onTrailerBtnClick(e));

    const movieInfoBtn = document.querySelector('.hero__btn.m-modal');
    movieInfoBtn.addEventListener('click', () =>
      onOpenModalFilmById(movieInfoBtn.dataset.id)
    );
  } catch (error) {
    heroRefs.heroContainer.classList.toggle(
      location.pathname.includes('library') ? 'hero--bg-lib' : 'hero--bg'
    );
  }
};

markupRandomTrendingMovie();
