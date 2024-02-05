import{c as g,a as B}from"./assets/scroll-9bed19a6.js";import{i as o,a as x,P as D}from"./assets/vendor-ebe44317.js";const L=document.querySelector(".quote__backend"),$=new Date().toLocaleDateString();async function R(){L.innerHTML=`
        <span class="loader"></span>
    `;try{return(await x.get("https://energyflow.b.goit.study/api/quote")).data}catch{o.error({title:"Error",message:"Something went wrong, try again"})}}function M(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function _(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===$){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));L.innerHTML=M(e,t)}else R().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",$),L.innerHTML=M(e,t)}).catch(e=>o.error({title:"Error",message:e.message}))}_();const r={form:document.getElementById("subscriptionForm"),email:document.getElementById("email"),pattern:new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),button:document.getElementById("submitButton")};r.email.addEventListener("input",j);function j(){r.email.value.length===0?(r.button.disabled=!0,r.button.classList.add("noActive")):(r.button.disabled=!1,r.button.classList.remove("noActive")),r.form.addEventListener("submit",z)}async function z(e){e.preventDefault();try{(r.pattern.test(r.email.value)||r.email.value.length!=0)&&await x.post("https://energyflow.b.goit.study/api/subscription",{email:r.email.value}).then(t=>o.success({title:"Success",message:t.data.message})).catch(t=>o.error({title:"Error",message:t.response.data.message}))}catch{o.error({title:"Error",message:"Something went wrong, try again"})}}const b="/Energy-Flow/assets/exercises-sprite-d4ab7b8a.svg";function y(e,t){const a=document.getElementById("tui-pagination-container"),s=t<3?t:3,i={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},n=new D(a,i);return s<=1?a.style.display="none":a.style.display="block",n}const l=document.querySelector(".exercises-list");let m="Muscles",v=1;const F=12,O=9;let E,S;const h=document.getElementById("exercises-search-form"),d=document.querySelector(".exircises-category"),P=document.querySelector(".exercises-title"),Q=h.querySelector(".exercises-search-input");async function p(e,t){let a=new URLSearchParams({filter:e,page:t,limit:F});try{await x.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let i=s.data.results;E=s.data.totalPages;const n=i.map(({name:c,filter:u,imgUrl:w})=>`<li class="exercises-list-item" data-name="${c}" data-filter="${u}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${w}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${g(c)}</p>
            <p class="exercises-item-subname">${u}</p>
            </div>
          </li>`).join("");l.insertAdjacentHTML("beforeend",n),J()}).catch(s=>{o.error({title:"Error",message:s.response.data.message})})}catch{o.error({title:"Error",message:"Something went wrong, try again"})}}await p(m,v);y(12,E).on("afterMove",({page:e})=>{l.innerHTML="",p(m,e)});function J(){let e=v;const t=document.querySelectorAll(".exercises-list-item");for(const a of t){a.addEventListener("click",s);async function s(i){const n=i.currentTarget.dataset.name,c=i.currentTarget.dataset.filter;h.classList.remove("input-hidden"),await f({filter:c,name:n,page:e}),y(9,S).on("afterMove",async({page:u})=>{l.innerHTML="",await f({filter:c,name:n,page:u})}),a.removeEventListener("click",s)}}}const k=document.querySelectorAll(".exercises-filter-button");for(const e of k)e.addEventListener("click",async function(t){h.classList.add("input-hidden");const a=t.currentTarget.dataset.name;for(const s of k)s.classList.remove("active-btn");t.target.classList.add("active-btn"),m=a,l.innerHTML="",d.dataset.name="",d.textContent="",P.textContent="Exercises",await p(a,v),y(12,E).on("afterMove",({page:s})=>{l.innerHTML="",p(m,s)})});async function f({filter:e,name:t,page:a,keyword:s=""}){const n={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await x.get(`https://energyflow.b.goit.study/api/exercises?${n}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${O}`).then(c=>{let u=c.data.results;S=c.data.totalPages,d.dataset.name=t,d.dataset.filter=e,d.textContent=g(t),P.textContent="Exercises /";const w=u.map(({bodyPart:T,burnedCalories:q,name:C,_id:I,target:H,rating:A})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${A.toFixed(1)}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="${b}#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${I}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="${b}#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="${b}#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${g(C)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${q}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${g(T)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${g(H)}
                </li>
              </ul>
            </div>
          </li> `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",w),B("Add")}).catch(c=>{console.log(c),o.error({title:"Error",message:"Something went wrong"})})}h.addEventListener("submit",async e=>{e.preventDefault();let t=v,a=d.dataset.filter,s=d.dataset.name,i=Q.value.trim().toLowerCase();await f({filter:a,name:s,page:t,keyword:i}),y(9,S).on("afterMove",async({page:n})=>{l.innerHTML="",await f({filter:a,name:s,page:n,keyword:i})})});
//# sourceMappingURL=commonHelpers2.js.map
