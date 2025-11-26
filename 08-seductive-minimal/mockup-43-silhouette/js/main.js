const playBtn = document.querySelector('.play-silhouette');
if (playBtn) {
    playBtn.addEventListener('click', () => console.log('Play video'));
}

// Animate frame accents on load
const accents = document.querySelectorAll('.frame-accent');
accents.forEach((accent, i) => {
    accent.style.opacity = '0';
    accent.style.transform = 'scale(0.8)';
    setTimeout(() => {
        accent.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        accent.style.opacity = '1';
        accent.style.transform = 'scale(1)';
    }, 300 + (i * 200));
});

// Stagger link animations
const links = document.querySelectorAll('.link-block');
links.forEach((link, i) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(20px)';
    setTimeout(() => {
        link.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
    }, 600 + (i * 100));
});
