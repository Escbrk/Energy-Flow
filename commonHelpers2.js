import{c as g,a as A}from"./assets/scroll-9bed19a6.js";import{i as o,a as x,P as D}from"./assets/vendor-ebe44317.js";const E=document.querySelector(".quote__backend"),$=new Date().toLocaleDateString();async function R(){E.innerHTML=`
        <span class="loader"></span>
    `;try{return(await x.get("https://energyflow.b.goit.study/api/quote")).data}catch{o.error({title:"Error",message:"Something went wrong, try again"})}}function M(e,t){return`<p class="quote__backend-text">${t}</p>
            <p class="quote__backend-author">${e}</p>`}function _(){if(localStorage.getItem("quote")&&localStorage.getItem("savedDate")===$){const{author:e,quote:t}=JSON.parse(localStorage.getItem("quote"));E.innerHTML=M(e,t)}else R().then(({author:e,quote:t})=>{const a={author:e,quote:t};localStorage.setItem("quote",JSON.stringify(a)),localStorage.setItem("savedDate",$),E.innerHTML=M(e,t)}).catch(e=>o.error({title:"Error",message:e.message}))}_();const c={form:document.getElementById("subscriptionForm"),email:document.getElementById("email"),pattern:new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/),button:document.getElementById("submitButton")};c.email.addEventListener("input",j);function j(){c.email.value.length===0?c.button.disabled=!0:c.button.disabled=!1,c.form.addEventListener("submit",z)}async function z(e){e.preventDefault();try{(c.pattern.test(c.email.value)||c.email.value.length!=0)&&await x.post("https://energyflow.b.goit.study/api/subscription",{email:c.email.value}).then(t=>o.success({title:"Success",message:t.data.message})).catch(t=>o.error({title:"Error",message:t.response.data.message}))}catch{o.error({title:"Error",message:"Something went wrong, try again"})}}const b="/Energy-Flow/assets/exercises-sprite-d4ab7b8a.svg";function y(e,t){const a=document.getElementById("tui-pagination-container"),s=t<3?t:3,r={totalItems:e*t,itemsPerPage:e,visiblePages:s,centerAlign:!0},i=new D(a,r);return s<=1?a.style.display="none":a.style.display="block",i}const l=document.querySelector(".exercises-list");let m="Muscles",v=1;const F=12,O=9;let L,S;const h=document.getElementById("exercises-search-form"),d=document.querySelector(".exircises-category"),P=document.querySelector(".exercises-title"),Q=h.querySelector(".exercises-search-input");async function p(e,t){let a=new URLSearchParams({filter:e,page:t,limit:F});try{await x.get(`https://energyflow.b.goit.study/api/filters?${a}`).then(s=>{let r=s.data.results;L=s.data.totalPages;const i=r.map(({name:n,filter:u,imgUrl:w})=>`<li class="exercises-list-item" data-name="${n}" data-filter="${u}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${w}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${g(n)}</p>
            <p class="exercises-item-subname">${u}</p>
            </div>
          </li>`).join("");l.insertAdjacentHTML("beforeend",i),J()}).catch(s=>{o.error({title:"Error",message:s.response.data.message})})}catch{o.error({title:"Error",message:"Something went wrong, try again"})}}await p(m,v);y(12,L).on("afterMove",({page:e})=>{l.innerHTML="",p(m,e)});function J(){let e=v;const t=document.querySelectorAll(".exercises-list-item");for(const a of t){a.addEventListener("click",s);async function s(r){const i=r.currentTarget.dataset.name,n=r.currentTarget.dataset.filter;h.classList.remove("input-hidden"),await f({filter:n,name:i,page:e}),y(9,S).on("afterMove",async({page:u})=>{l.innerHTML="",await f({filter:n,name:i,page:u})}),a.removeEventListener("click",s)}}}const k=document.querySelectorAll(".exercises-filter-button");for(const e of k)e.addEventListener("click",async function(t){h.classList.add("input-hidden");const a=t.currentTarget.dataset.name;for(const s of k)s.classList.remove("active-btn");t.target.classList.add("active-btn"),m=a,l.innerHTML="",d.dataset.name="",d.textContent="",P.textContent="Exercises",await p(a,v),y(12,L).on("afterMove",({page:s})=>{l.innerHTML="",p(m,s)})});async function f({filter:e,name:t,page:a,keyword:s=""}){const i={"Body parts":"bodypart",Muscles:"muscles",Equipment:"equipment"}[e];await x.get(`https://energyflow.b.goit.study/api/exercises?${i}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${O}`).then(n=>{let u=n.data.results;S=n.data.totalPages,d.dataset.name=t,d.dataset.filter=e,d.textContent=g(t),P.textContent="Exercises /";const w=u.map(({bodyPart:T,burnedCalories:q,name:C,_id:I,target:H,rating:B})=>`<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${B.toFixed(1)}</p>
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
          </li> `).join("");l.innerHTML="",l.insertAdjacentHTML("beforeend",w),A("Add")}).catch(n=>{console.log(n),o.error({title:"Error",message:"Something went wrong"})})}h.addEventListener("submit",async e=>{e.preventDefault();let t=v,a=d.dataset.filter,s=d.dataset.name,r=Q.value.trim().toLowerCase();await f({filter:a,name:s,page:t,keyword:r}),y(9,S).on("afterMove",async({page:i})=>{l.innerHTML="",await f({filter:a,name:s,page:i,keyword:r})})});
//# sourceMappingURL=commonHelpers2.js.map
