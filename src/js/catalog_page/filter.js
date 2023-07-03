import { fetchMoviesFilter } from 'js/api/catalogAPI';
import loaderWrapper from '../loader';

export class Filter {
  constructor({ filter, year }) {
    this.filter = filter;
    this.year = year;
    this.page = 1;
  }

  async searchMovie() {
    const result = await loaderWrapper(
      fetchMoviesFilter(this.page, this.filter, this.year)
    );

    return result;
  }
}
