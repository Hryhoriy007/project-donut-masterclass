(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),o=document.querySelector("[data-body]");document.querySelectorAll(".mobile-menu__nav-link").forEach((e=>e.addEventListener("click",(()=>{t.classList.remove("mobile-menu--is-open"),document.body.classList.remove("menu-open"),o.classList.remove("body--scroll-hidden"),o.classList.remove("body--scroll-hidden::-webkit-scrollbar")})))),e.addEventListener("click",(()=>{const s="true"===e.getAttribute("aria-expanded")||!1;e.setAttribute("aria-expanded",!s),t.classList.toggle("mobile-menu--is-open"),document.body.classList.toggle("menu-open"),o.classList.toggle("body--scroll-hidden"),o.classList.toggle("body--scroll-hidden::-webkit-scrollbar")}))})();
//# sourceMappingURL=index.7d111ef4.js.map