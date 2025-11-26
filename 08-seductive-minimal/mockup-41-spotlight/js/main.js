const playStage = document.querySelector('.play-stage');
if (playStage) {
    playStage.addEventListener('click', () => console.log('Play video'));
}

// Spotlight follows cursor subtly
document.addEventListener('mousemove', (e) => {
    const spotlight = document.querySelector('.spotlight-effect');
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    spotlight.style.transform = `translateX(calc(-50% + ${x}px))`;
});
