const watch = document.querySelector('.watch');
if (watch) {
    watch.addEventListener('click', () => console.log('Play video'));
}

// Random color shift on scroll
let hue = 240;
window.addEventListener('scroll', () => {
    hue = (hue + 1) % 360;
    document.body.style.background = `hsl(${hue}, 100%, 50%)`;
});
