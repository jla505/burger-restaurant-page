(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("img");return n.src="images/stockburger.png",n.alt="Burger",t.appendChild(e("Best burgers in Vancouver")),t.appendChild(e("Made with passion since 1998")),t.appendChild(n),t.appendChild(e("Order online or visit us!")),t}())};function n(e,t){const n=document.createElement("div");n.classList.add("menu-item");const a=document.createElement("h2");a.textContent=e;const c=document.createElement("p");c.textContent=t;const d=document.createElement("img");return d.src=`/dist/images/burgers/${e.toLowerCase()}.png`,d.alt=`${e}`,n.appendChild(d),n.appendChild(a),n.appendChild(c),n}function a(){const e=document.createElement("header");e.classList.add("header");const a=document.createElement("h1");return a.classList.add("restaurant-name"),a.textContent="Burgermania",e.appendChild(a),e.appendChild(function(){const e=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(a),t())}));const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Menu",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(d),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("Beef Burger","Beef patty, Lettuce, Onion, Tomato, Pickle, Cheese, Mayo, Ketchup")),e.appendChild(n("Cheddar Burger","Beef patty, Cheddar, Tomato, Lettuce")),e.appendChild(n("Chicken Burger","Chicken, Tomato, Lettuce, Mayo")),e.appendChild(n("Deluxe Burger","Beef patty, Cheese, Lettuce")),e.appendChild(n("Egg Burger","Beef patty, Egg, Tomato, Lettuce")),e.appendChild(n("Fish Burger","Fish patty, Cheese, Mayo")),e}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="Contact",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(c(o),function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="📞 123 456 789";const n=document.createElement("p");n.textContent="🏠 1 E Cordova St #130, Vancouver, Canada";const a=document.createElement("img");return a.src="images/restaurant-location.png",a.alt="Burgermania restaurant location",e.appendChild(t),e.appendChild(n),e.appendChild(a),e}())}())})),e.appendChild(a),e.appendChild(d),e.appendChild(o),e}()),e}function c(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(a()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} jla505`;const n=document.createElement("a");n.href="https://github.com/jla505";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}()),c(document.querySelector(".button-nav")),t()}()})();