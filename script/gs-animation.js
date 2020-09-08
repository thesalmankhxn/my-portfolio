window.addEventListener('load', () => {
    setTimeout( () => {
        gsap.from('.hero-left', {opacity: 0, duration: 2.5, ease: Back.easeOut.config(1.9), y: -100});
        gsap.from('.anim1', {opacity: 0, duration: 1, delay: .5, y: -30});
        gsap.from('.hero-right', {opacity: 0, duration: 1, delay: .5, x: 100});
        gsap.from('.scroll-down', {opacity: 0, duration: 1, y: -50});
    }, 500);
});