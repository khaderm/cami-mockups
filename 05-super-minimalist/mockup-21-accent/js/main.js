const videoPreview = document.querySelector('.video-preview');
if (videoPreview) {
    videoPreview.addEventListener('click', () => console.log('Play video'));
}

const socialLinks = document.querySelectorAll('.social-scroll a');
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        socialLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
