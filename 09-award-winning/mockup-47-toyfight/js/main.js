// Play button
const playBtn = document.querySelector('.play-toy');
if (playBtn) {
    playBtn.addEventListener('click', () => {
        // Fun click effect
        playBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            playBtn.style.transform = 'scale(1.05)';
        }, 100);
        console.log('Play video');
    });
}

// Add playful hover sounds (visual feedback instead for now)
const pills = document.querySelectorAll('.link-pill');
pills.forEach(pill => {
    pill.addEventListener('mouseenter', () => {
        // Create a tiny bounce effect
        pill.style.animation = 'none';
        pill.offsetHeight; // Trigger reflow
        pill.style.animation = 'jiggle 0.3s ease';
    });
});

// Add jiggle keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes jiggle {
        0%, 100% { transform: translateY(-3px) scale(1.05) rotate(0deg); }
        25% { transform: translateY(-3px) scale(1.05) rotate(-2deg); }
        75% { transform: translateY(-3px) scale(1.05) rotate(2deg); }
    }
`;
document.head.appendChild(style);

// Stagger entrance animations
const elements = document.querySelectorAll('.badge-toy, .title-toy, .video-toy, .links-toy');
elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
        el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 100 + (i * 150));
});

// Easter egg: click stickers
const stickers = document.querySelectorAll('.sticker');
stickers.forEach(sticker => {
    sticker.style.cursor = 'pointer';
    sticker.addEventListener('click', () => {
        sticker.style.animation = 'none';
        sticker.offsetHeight;
        sticker.style.animation = 'spin 0.5s ease';
    });
});

const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg) scale(1.5); }
    }
`;
document.head.appendChild(spinStyle);
