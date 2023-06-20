export default ({ id, backdrop_path, title, ratingValue, overview }) => `
<div
  class="hero__wrap"
  style="
    --poster-url: ${`url(https://image.tmdb.org/t/p/original${backdrop_path}`});
    --poster-url-tablet: ${`url(https://image.tmdb.org/t/p/w1280${backdrop_path})`};
    --poster-url-mobile: ${`url(https://image.tmdb.org/t/p/w780${backdrop_path})`};
  "
>
  <div class="container">
    <div class="hero__inner" >
      <h1 class="hero__title">${title}</h1>
      <div class="hrating">
        <div class="hrating__body">
          <div class="hrating__active" style="width: ${ratingValue}%;"></div>
          <div class="hrating__items">
            <input type="radio" class="hrating__item" value="1" name="rating" />
            <input type="radio" class="hrating__item" value="2" name="rating" />
            <input type="radio" class="hrating__item" value="3" name="rating" />
            <input type="radio" class="hrating__item" value="4" name="rating" />
            <input type="radio" class="hrating__item" value="5" name="rating" />
          </div>
        </div>
      </div>
      <p class="hero__text hero__text--trunc">
        ${overview}
      </p>
      <div class="hero__btns" id="${id}">
        <button
          id="watch-trailer"
          class="hero__btn hero__btn--primary hero__btn--watch-trailer"
          data-movie-id="${id}">Watch trailer</button>
        <button
          class="hero__btn hero__btn--secondary m-modal" 
          data-movie-id="${id}"
          data-id="${id}"
        >More details</button>
      </div>
    </div>
  </div>
</div>`;
