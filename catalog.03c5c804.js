function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=t.parcelRequire34ff;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire34ff=i),i("bUb57");var r=i("7Y9D8"),s=i("2shzp"),l=i("76tat"),o=i("hmX5O");class c{pageCount=0;pageIndex=0;container=null;constructor({container:e,count:t,index:a,callback:n}){this.pageCount=t,this.pageIndex=a,this.container=e,this.callBack=n,this.render=this.render.bind(this),this.handlePaginationItemClick=this.handlePaginationItemClick.bind(this),this.render(),document.addEventListener("click",this.handlePaginationItemClick)}render(){let e="",t=this.pageIndex-1,a=this.pageIndex+1;if(this.pageCount>1&&(e+='<li class="btn prev list-item"><span><i class="fas fa-angle-left"></i>&lsaquo;</span></li>'),!(this.pageIndex<1)&&!(this.pageIndex>this.pageCount)){this.pageIndex>2&&this.pageCount>4&&(e+='<li data-index="1" class="first list-item"><span>1</span></li>',this.pageIndex>3&&this.pageCount>5&&(e+='<li class="dots"><span>...</span></li>')),this.pageIndex===this.pageCount?t-=2:this.pageIndex===this.pageCount-1&&(t-=1),1===this.pageIndex?a+=2:2===this.pageIndex&&(a+=1);for(let n=t;n<=a;n++)n>this.pageCount||(n<0&&(n=0),0===n&&(n+=1),e+=`<li data-index="${n}" class="list-item ${this.pageIndex===n?"active":""}"><span>${n}</span></li>`);this.pageIndex<this.pageCount-1&&(this.pageIndex<this.pageCount-2&&this.pageCount>5&&(e+='<li class="dots"><span>...</span></li>'),this.pageCount>4&&(e+=`<li data-index="${this.pageCount}" class="last list-item"><span>${this.pageCount}</span></li>`)),this.pageCount>1&&(e+='<li class="btn next list-item"><span>&rsaquo;<i class="fas fa-angle-right"></i></span></li>'),this.container&&(this.container.innerHTML=e)}}async handlePaginationItemClick(e){e.stopPropagation();let t=e.target,a=t.closest(".list-item"),n=a?.classList.contains("btn")||!1,i=a?.classList.contains("prev")||!1;if(n){this.pageIndex<this.pageCount&&!i?this.setPageIndex(this.pageIndex+1):this.pageIndex>1&&i?this.setPageIndex(this.pageIndex-1):this.pageIndex!==this.pageCount||i||(a.disabled=!0),this.callBack(this.pageIndex),h();return}if(a){let e=parseInt(a.dataset.index,10);this.setPageIndex(e),this.callBack(e),h()}}setPageIndex(e){this.pageIndex=e,this.render()}}const d=document.querySelector(".gallery");function h(){d.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}const u="https://api.themoviedb.org/3/",p="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg",g={form:document.querySelector("#search-form"),searchInput:document.querySelector('[name="searchQuery"]'),gallery:document.querySelector(".gallery"),clearBtn:document.querySelector(".clear-btn"),yearSelectEl:document.getElementById("year-select"),paginationContainer:document.querySelector(".pagination ul"),genreSelectEl:document.getElementById("genres-select")};var y=i("b3SuP");async function m(e){try{let{data:t}=await (0,s.default).get(`${u}trending/all/week?language=en-US&page=${e}`,{headers:{Authorization:`Bearer ${p}`,accept:"application/json"}});return t}catch(e){(0,r.Notify).failure("Sorry, there are no movies matching your search query. Please try again.")}}function v(e){return e.map(e=>e.release_date?(0,o.default)(e):"").join("")}function f(){g.paginationContainer.innerHTML="",g.gallery.innerHTML=`
    <div class="gallery-empty"
        <p class="text-empty">OOPS...<br>
        We are very sorry!<br>
        We don’t have any results matching your search.
        </p>
    </div>   
    `}async function _(e){try{let t=await m(e),a=v(t.results);if(g.gallery.innerHTML=a,(0,l.default)(),0===t.total_results)return f()}catch(e){console.error(e)}}!async function(){try{let e=await m(1),t=v(e.results);g.gallery.innerHTML=t;let a=document.querySelector("#anchor");if(a.addEventListener("click",e=>{let t=e.target.closest(".m-modal");if(!t)return;let a=t.dataset.id;(0,y.onOpenModalFilmById)(a)}),(0,l.default)(),0===e.total_results)return f();new c({container:g.paginationContainer,count:Math.min(e.total_pages,197),index:1,callback:_})}catch(e){console.error(e)}}();var I=i("e0qAQ"),b=i("3OIsu"),x=i("bh4hP"),y=i("b3SuP");const C=async()=>{let e="",t="background-size: cover";try{let{results:a}=await (0,I.fetchTrendingMoviesByDay)(),{id:n,title:i,overview:r,backdrop_path:s,vote_average:l}=a[Math.floor(20*Math.random())],o=`https://image.tmdb.org/t/p/original/${s}`;window.innerWidth<768&&(t="background-size: 768px; background-position: center"),e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${o}); ${t}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${i}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*l}%;"></div>
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
              ${r}
            </p>
            <div class="hero__btns" id="${n}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${n}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${n}" data-id="${n}">More details</button>
            </div>
          </div>
        </div>
      </div>`,x.heroRefs.heroContainer.innerHTML=e;let c=document.getElementById("watch-trailer");c.addEventListener("click",e=>(0,b.onTrailerBtnClick)(e));let d=document.querySelector(".hero__btn.m-modal");d.addEventListener("click",()=>(0,y.onOpenModalFilmById)(d.dataset.id))}catch(t){(0,x.heroRefs).heroContainer.classList.toggle("hero--bg"),e=`
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
      </div>`,x.heroRefs.heroContainer.innerHTML=e}};C();var r=i("7Y9D8"),L=i("170nP"),s=i("2shzp"),l=i("76tat"),k=i("8nTeF"),M=i("2eUFK");let w="",E="";const $=[];for(let e=2023;e>=1895;e-=1)$.push({id:e,name:e});(0,k.default)($,g.yearSelectEl);const S=e(L)(g.yearSelectEl)[0];S.select.addEventListener("change",function(e){E=`&primary_release_year=${e.target.value}`}),(0,k.default)(e(M).genres,g.genreSelectEl);const T=e(L)(g.genreSelectEl)[0];function B(){g.paginationContainer.innerHTML="",g.gallery.innerHTML=`
    <div class="gallery-empty"
        <p class="text-empty">OOPS...<br>
        We are very sorry!<br>
        We don’t have any results matching your search.
        </p>
    </div>   
    `}async function q(t){try{let{data:e}=await (0,s.default).get(`${u}search/movie?query=${w}&page=${t}${E}`,{headers:{Authorization:`Bearer ${p}`,accept:"application/json"}});return e}catch(t){e(r).Notify.failure("Sorry, there are no images matching your search query. Please try again.")}}async function O(e){try{let t=await q(e),a=v(t.results);if(0===t.total_results)return B();g.gallery.innerHTML=a,(0,l.default)()}catch(e){console.error(e)}}async function P(){try{let e=await q(1),t=v(e.results);if(0===e.total_results)return B();new c({container:g.paginationContainer,count:Math.min(e.total_pages,197),index:1,callback:O}),g.gallery.innerHTML=t,(0,l.default)()}catch(e){console.error(e)}}T.select.addEventListener("change",function(e){let t=g.gallery.childNodes,a=e.target.value;"-1"===a?t.forEach(e=>e.classList.remove("is-hidden")):t.forEach(e=>{e.dataset.genres.split(",").includes(a)?e.classList.remove("is-hidden"):e.classList.add("is-hidden")})}),g.searchInput.addEventListener("input",function(){g.searchInput.value&&g.clearBtn.classList.add("is-active"),(""===g.searchInput.value||" "===g.searchInput.value)&&(g.clearBtn.classList.remove("is-active"),_())}),g.clearBtn.addEventListener("click",function(){g.searchInput.value="",g.clearBtn.classList.remove("is-active"),g.gallery.innerHTML="",_(1)}),g.form.addEventListener("submit",function(t){if(t.preventDefault(),g.gallery.innerHTML="",""===(w=g.searchInput.value.trim())||" "===w)return _(),e(r).Notify.failure("Type something, please.");P()}),i("1Hrz4"),i("5kw5v");
//# sourceMappingURL=catalog.03c5c804.js.map
