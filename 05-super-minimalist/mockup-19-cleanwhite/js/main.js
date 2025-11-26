// Minimal interactions
const videoThumb = document.querySelector('.video-thumb');

if (videoThumb) {
    videoThumb.addEventListener('click', () => {
        console.log('Play video');
    });
}

// Touch feedback
const socialItems = document.querySelectorAll('.social-item');

socialItems.forEach(item => {
    item.addEventListener('touchstart', () => {
        item.style.transform = 'scale(0.95)';
    });
    item.addEventListener('touchend', () => {
        item.style.transform = '';
    });
});
