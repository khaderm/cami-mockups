const playBtn = document.querySelector('.play-velvet');
if (playBtn) {
    playBtn.addEventListener('click', () => console.log('Play video'));
}

// Subtle pulse on video container
const videoVelvet = document.querySelector('.video-velvet');
let breathing = true;

function breathe() {
    if (!breathing) return;
    videoVelvet.style.boxShadow = '0 0 60px rgba(139, 41, 66, 0.3)';
    setTimeout(() => {
        videoVelvet.style.boxShadow = '0 0 30px rgba(139, 41, 66, 0.15)';
    }, 2000);
}

setInterval(breathe, 4000);
breathe();
