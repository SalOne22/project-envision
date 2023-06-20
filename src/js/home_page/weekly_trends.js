import refs from '../refs/weekly_trends-refs';
import { getTrendingMoviesByWeek } from '../api/weekly_trends-api';
import { makeMovieList } from '../components/MovieList';

const MAX_MOVIES_IN_SECTION = 3;

if (refs.movieList) {
  handlerMoviesWeek();
}

function handlerMoviesWeek() {
  getTrendingMoviesByWeek()
    .then(data => {
      createMarkupMovies(data);
    })
    .catch(err => console.error(err));
}
function createMarkupMovies({ results }) {
  const randomIndexes = getRandomMovieToShow(results);
  const moviesToShow = randomIndexes.map(index => results[index]);
  makeMovieList(moviesToShow, refs.movieList);
}

function getRandomMovieToShow(results) {
  const randomIndexes = [];
  while (randomIndexes.length < MAX_MOVIES_IN_SECTION) {
    const randomIndex = Math.floor(Math.random() * results.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes;
}
