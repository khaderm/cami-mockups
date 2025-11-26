// Play button
const playBtn = document.querySelector('.play-base');
if (playBtn) {
    playBtn.addEventListener('click', () => console.log('Play reel'));
}

// Smooth entrance animations
const headline = document.querySelector('.headline-base');
const video = document.querySelector('.video-container');

headline.style.opacity = '0';
headline.style.transform = 'translateY(30px)';
video.style.opacity = '0';
video.style.transform = 'translateY(30px)';

setTimeout(() => {
    headline.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    headline.style.opacity = '1';
    headline.style.transform = 'translateY(0)';
}, 200);

setTimeout(() => {
    video.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    video.style.opacity = '1';
    video.style.transform = 'translateY(0)';
}, 400);

// Subtle parallax on video
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    video.style.transform = `translate(${x}px, ${y}px)`;
});
