const videoLink = document.querySelector('.video-link');
if (videoLink) {
    videoLink.addEventListener('click', () => console.log('Play video'));
}

// Touch feedback
const linkBtns = document.querySelectorAll('.link-btn');
linkBtns.forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.98)';
    });
    btn.addEventListener('touchend', () => {
        btn.style.transform = '';
    });
});
