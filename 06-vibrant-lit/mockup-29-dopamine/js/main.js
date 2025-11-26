const videoBox = document.querySelector('.video-box');
if (videoBox) {
    videoBox.addEventListener('click', () => console.log('Play video'));
}

// Glow follow mouse
document.addEventListener('mousemove', (e) => {
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glow1.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    glow2.style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
});
