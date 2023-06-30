import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg';

export async function fetchMoviesOfWeek(currentPage) {
  try {
    const { data } = await axios.get(
      `${URL}trending/movie/week?language=en-US&page=${currentPage}`,
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

export async function fetchMoviesSearch(currentPage, query, year) {
  try {
    const { data } = await axios.get(
      `${URL}search/movie?query=${query}&page=${currentPage}${
        year ? `&primary_release_year=${year}` : ''
      }`,
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
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
