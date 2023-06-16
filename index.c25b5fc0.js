!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=t.parcelRequire34ff;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequire34ff=o),o("i8Q71");var n=o("8yl2Y"),r=o("faU4B"),l=o("6U7c4"),s=o("16wVm");let c=async()=>{let e="",t="background-size: cover";try{let{results:a}=await (0,n.fetchTrendingMoviesByDay)(),{id:i,title:o,overview:c,backdrop_path:d,vote_average:u}=a[Math.floor(20*Math.random())],p=`https://image.tmdb.org/t/p/original/${d}`;window.innerWidth<768&&(t="background-size: 768px; background-position: center"),e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${p}); ${t}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${o}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*u}%;"></div>
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
              ${c}
            </p>
            <div class="hero__btns">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${i}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${i}" data-id="${i}">More details</button>
            </div>
          </div>
        </div>
      </div>`,l.heroRefs.heroContainer.innerHTML=e;let _=document.getElementById("watch-trailer");_.addEventListener("click",e=>(0,r.onTrailerBtnClick)(e));let h=document.querySelector(".hero__btn.m-modal");h.addEventListener("click",()=>(0,s.onOpenModalFilmById)(h.dataset.id))}catch(t){(0,l.heroRefs).heroContainer.classList.toggle("hero--bg"),e=`
      <div class="hero__wrap">
        <div class="container">
          <div class="hero__inner">
            <h1 class="hero__title hero__title--default">Let’s Make Your Own Cinema</h1>
            <p class="hero__text">
              Is a guide to creating a personalized movie theater experience.
              You'll need a projector, screen, and speakers.
              <span class="hero__text--add">Decorate your space, choose your films, and stock up on snacks for the full experience.</span>
            </p>

            <div class="hero__btns">
              <a href="./catalog.html">
                <button class="hero__btn hero__btn--primary">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>`,l.heroRefs.heroContainer.innerHTML=e}};c();var d=o("6JpON"),u=o("dIxxU"),d=o("6JpON");let p={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};async function _(){try{let e=await (0,u.default).get("https://api.themoviedb.org/3/movie/upcoming",p);return e.data}catch(e){console.error(e),(0,d.Notify).failure("Oops! Something went wrong. Try again, please!")}}var h=o("XcJ0g"),g=o("jkbZ2");let m="",v=e(h).genres,f=document.querySelector(".upcoming");_().then(e=>{!function({results:e}){let t;let a=Math.floor(Math.random()*e.length),{backdrop_path:i,genre_ids:o,id:n,overview:r,popularity:l,release_date:s,title:c,vote_average:d,vote_count:u}=e[a];t=[],o.forEach(e=>{v.forEach(a=>{e===a.id&&t.push(a.name)})}),m=t.length>2?`${t[0]} and others...`:2===t.length?`${t[0]}, ${t[1]}`:`${t[0]}`,f.innerHTML=`<div class="container">
    <h2 class="upcoming__section-title">UPCOMING THIS MONTH</h2>
    <div class="upcoming__block">
      <div class="upcoming__poster">
        <img
          class="upcoming__picture"
          src="https://image.tmdb.org/t/p/original${i}"
          alt="${c}"
        />
      </div>
      <div class="upcoming__info">
        <h3 class="upcoming__title">${c}</h3>
        <ul class="list upcoming__list-info">
          <li class="upcoming__list-info--left">
            <div class="upcoming__release-date">
              <p class="upcoming__release-date--title">Release date</p>
              <p class="upcoming__release-date--value">${s}</p>
            </div>
            <div class="upcoming__vote">
              <p class="upcoming__vote--title">Vote / Votes</p>
              <p class="upcoming__vote--value">
                <span class="upcoming__vote--value-average">${d}</span> /
                <span class="upcoming__vote--value-count">${u}</span>
              </p>
            </div>
          </li>
          <li class="upcoming__list-info--right">
            <div class="upcoming__popularity">
              <p class="upcoming__popularity--title">Popularity</p>
              <p class="upcoming__popularity--value">${l}</p>
            </div>
            <div class="upcoming__genre">
              <p class="upcoming__genre--title">Genre</p>
              <p class="upcoming__genre--value">${m}</p>
            </div>
          </li>
        </ul>
        <h4 class="upcoming__about">About</h4>
        <p class="upcoming__overview">${r}</p>
        <button class="upcoming__addToLibrary-button" type="button" data-id="${n}" id="addToMyLibrary">
        Add to my library
        </button>
        </div>
      </div>
    </div>`,function(){let e=document.querySelector("#addToMyLibrary");(0,g.default)(e)}()}(e)}).catch(t=>{console.error(t),e(d).Notify.failure("Oops! Something went wrong. Try again, please!")});var h=o("XcJ0g"),y=o("6sNo0"),b=o("14Rx2");let M={movieList:document.querySelector(".list-movie-card")};var u=o("dIxxU");let I={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function N(e=1){try{let t=await (0,u.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,I);return t.data}catch(e){console.error(e)}}var s=o("16wVm");if(M.movieList){let t={};e(h).genres.forEach(e=>{t[e.id]=e.name}),function(e){N().then(t=>{(function({results:e},t){let a=function(e){let t=[];for(;t.length<3;){let a=Math.floor(Math.random()*e.length);t.includes(a)||t.push(a)}return t}(e),i=a.map(t=>e[t]);(function(e){M.movieList.innerHTML=e.map(y.default).join(""),(0,b.default)();let t=document.querySelector(".list-movie-card.js-gallery");t.addEventListener("click",e=>{let t=e.target.closest(".m-modal");if(!t)return;let a=t.dataset.id;(0,s.onOpenModalFilmById)(a)})})(i,t)})(t,e)}).catch(e=>console.error(e))}(t)}o("bf8lc"),o("cs2b8")}();
//# sourceMappingURL=index.c25b5fc0.js.map
