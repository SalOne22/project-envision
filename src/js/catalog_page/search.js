import { fetchMoviesSearch } from 'js/api/catalogAPI';
import loaderWrapper from '../loader';

export class Search {
  constructor({ query, year }) {
    this.query = query;
    this.year = year;
    this.page = 1;
  }

  async searchMovie() {
    const result = await loaderWrapper(
      fetchMoviesSearch(this.page, this.query, this.year)
    );

    return result;
  }
}
