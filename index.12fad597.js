!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=t.parcelRequire34ff;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequire34ff=a),a("i8Q71"),a("j55CI");var n=a("6JpON"),l=a("dIxxU"),n=a("6JpON");let r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};async function c(){try{let e=await (0,l.default).get("https://api.themoviedb.org/3/movie/upcoming",r);return e.data}catch(e){console.error(e),(0,n.Notify).failure("Oops! Something went wrong. Try again, please!")}}var s=a("XcJ0g"),u=a("jkbZ2");let p="",d=e(s).genres,g=document.querySelector(".upcoming");c().then(e=>{!function({results:e}){let t;let i=Math.floor(Math.random()*e.length),{backdrop_path:o,genre_ids:a,id:n,overview:l,popularity:r,release_date:c,title:s,vote_average:m,vote_count:_}=e[i];t=[],a.forEach(e=>{d.forEach(i=>{e===i.id&&t.push(i.name)})}),p=t.length>2?`${t[0]} and others...`:2===t.length?`${t[0]}, ${t[1]}`:`${t[0]}`,g.innerHTML=`<div class="container">
    <h2 class="upcoming__section-title">UPCOMING THIS MONTH</h2>
    <div class="upcoming__block">
      <div class="upcoming__poster">
        <img
          class="upcoming__picture"
          src="https://image.tmdb.org/t/p/original${o}"
          alt="${s}"
        />
      </div>
      <div class="upcoming__info">
        <h3 class="upcoming__title">${s}</h3>
        <ul class="list upcoming__list-info">
          <li class="upcoming__list-info--left">
            <div class="upcoming__release-date">
              <p class="upcoming__release-date--title">Release date</p>
              <p class="upcoming__release-date--value">${c}</p>
            </div>
            <div class="upcoming__vote">
              <p class="upcoming__vote--title">Vote / Votes</p>
              <p class="upcoming__vote--value">
                <span class="upcoming__vote--value-average">${m}</span> /
                <span class="upcoming__vote--value-count">${_}</span>
              </p>
            </div>
          </li>
          <li class="upcoming__list-info--right">
            <div class="upcoming__popularity">
              <p class="upcoming__popularity--title">Popularity</p>
              <p class="upcoming__popularity--value">${r}</p>
            </div>
            <div class="upcoming__genre">
              <p class="upcoming__genre--title">Genre</p>
              <p class="upcoming__genre--value">${p}</p>
            </div>
          </li>
        </ul>
        <h4 class="upcoming__about">About</h4>
        <p class="upcoming__overview">${l}</p>
        <button class="upcoming__addToLibrary-button" type="button" data-id="${n}" id="addToMyLibrary">
        Add to my library
        </button>
        </div>
      </div>
    </div>`,function(){let e=document.querySelector("#addToMyLibrary");(0,u.default)(e)}()}(e)}).catch(t=>{console.error(t),e(n).Notify.failure("Oops! Something went wrong. Try again, please!")});var s=a("XcJ0g"),m=a("6sNo0"),_=a("14Rx2");let f={movieList:document.querySelector(".list-movie-card")};var l=a("dIxxU");let h={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function v(e=1){try{let t=await (0,l.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,h);return t.data}catch(e){console.error(e)}}var y=a("16wVm");if(f.movieList){let t={};e(s).genres.forEach(e=>{t[e.id]=e.name}),function(e){v().then(t=>{(function({results:e},t){let i=function(e){let t=[];for(;t.length<3;){let i=Math.floor(Math.random()*e.length);t.includes(i)||t.push(i)}return t}(e),o=i.map(t=>e[t]);(function(e){f.movieList.innerHTML=e.map(m.default).join(""),(0,_.default)();let t=document.querySelector(".list-movie-card.js-gallery");t.addEventListener("click",e=>{let t=e.target.closest(".m-modal");if(!t)return;let i=t.dataset.id;(0,y.onOpenModalFilmById)(i)})})(o,t)})(t,e)}).catch(e=>console.error(e))}(t)}a("bf8lc"),a("cs2b8")}();
//# sourceMappingURL=index.12fad597.js.map
