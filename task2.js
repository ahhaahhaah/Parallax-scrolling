window.addEventListener("scroll", parallaxScroll);

function parallaxScroll() {
    let scrolled = window.scrollY;
    document.querySelectorAll('.background').forEach(background => {
        let offsetTop = background.offsetTop;
        let parallaxOffset = (scrolled - offsetTop) * 0.5;

        let layer1 = background.querySelector('.layer-1');
        if (layer1) {
            layer1.style.transform = `translateY(${parallaxOffset}px)`;
        }
    });
}