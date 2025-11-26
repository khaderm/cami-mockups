// Play button
const playBtn = document.querySelector('.play-land');
if (playBtn) {
    playBtn.addEventListener('click', () => console.log('Play video'));
}

// Smooth entrance animations
const video = document.querySelector('.video-land');
const info = document.querySelector('.info-land');

video.style.opacity = '0';
video.style.transform = 'translateY(30px)';
info.style.opacity = '0';
info.style.transform = 'translateY(30px)';

setTimeout(() => {
    video.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
    video.style.opacity = '1';
    video.style.transform = 'translateY(0)';
}, 300);

setTimeout(() => {
    info.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
    info.style.opacity = '1';
    info.style.transform = 'translateY(0)';
}, 500);

// Sidebar links stagger
const sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach((link, i) => {
    link.style.opacity = '0';
    setTimeout(() => {
        link.style.transition = 'opacity 0.5s ease';
        link.style.opacity = '1';
    }, 800 + (i * 100));
});

// Subtle mouse parallax on video (desktop only)
if (window.innerWidth >= 768) {
    const videoContainer = document.querySelector('.video-container');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        videoContainer.style.transform = `translate(${x}px, ${y}px)`;
    });
}
