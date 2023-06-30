import { fetchMoviesSearch } from '../api/catalogAPI';

export class Search {
  constructor({ query, year }) {
    this.query = query;
    this.year = year;
    this.page = 1;
  }

  async searchMovie() {
    const result = await fetchMoviesSearch(this.page, this.query, this.year);

    return result;
  }
}
