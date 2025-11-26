// Loader
const loader = document.querySelector('.loader');
setTimeout(() => loader.classList.add('done'), 100);

// Play button
const playBtn = document.querySelector('.play-loco');
if (playBtn) {
    playBtn.addEventListener('click', () => console.log('Play video'));
}

// Stagger link animations
const links = document.querySelectorAll('.link-loco');
links.forEach((link, i) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(30px)';
    setTimeout(() => {
        link.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
    }, 2400 + (i * 100));
});

// Magnetic effect on play button (desktop)
if (window.innerWidth > 768) {
    playBtn.addEventListener('mousemove', (e) => {
        const rect = playBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        playBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    playBtn.addEventListener('mouseleave', () => {
        playBtn.style.transform = 'translate(0, 0)';
    });
}
