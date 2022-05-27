(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const body = document.querySelector('[data-body]');

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('mobile-menu--is-open');
        body.classList.toggle('body--scroll-hidden');
        body.classList.toggle('body--scroll-hidden::-webkit-scrollbar');
    });
})();