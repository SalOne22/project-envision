import Notiflix from 'notiflix';
import getUpcomingMovies from 'js/api/upcomingAPI';
import markupUpcomingMovies from 'js/markup/upcomingMarkup';

getUpcomingMovies()
  .then(data => {
    markupUpcomingMovies(data);
  })
  .catch(error => {
    console.error(error);
    Notiflix.Notify.failure('Oops! Something went wrong. Try again, please!');
  });
