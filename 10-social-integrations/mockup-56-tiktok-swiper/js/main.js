// TikTok-style Vertical Swiper
const swiper = document.getElementById('videoSwiper');
const slides = document.querySelectorAll('.video-slide');
const indicators = document.querySelectorAll('.indicator-dot');
const navHint = document.getElementById('navHint');
const embedModal = document.getElementById('embedModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

let currentIndex = 0;
let startY = 0;
let isDragging = false;

// Update active slide
function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i < index) {
            slide.classList.add('prev');
        }
    });

    indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    currentIndex = index;

    // Hide nav hint after first swipe
    if (index > 0) {
        navHint.classList.add('hidden');
    }
}

// Touch events for swipe
swiper.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
}, { passive: true });

swiper.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const endY = e.changedTouches[0].clientY;
    const diff = startY - endY;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            // Swipe up - next
            goToSlide(currentIndex + 1);
        } else {
            // Swipe down - prev
            goToSlide(currentIndex - 1);
        }
    }
}, { passive: true });

// Mouse wheel for desktop
swiper.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(currentIndex - 1);
    }
}, { passive: false });

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
    } else if (e.key === 'Escape') {
        closeModal();
    }
});

// Click on video to open TikTok embed
const placeholders = document.querySelectorAll('.video-placeholder');
placeholders.forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        const slide = placeholder.closest('.video-slide');
        const tiktokUrl = slide.dataset.tiktokUrl;
        openTikTokEmbed(tiktokUrl);
    });
});

// Open TikTok embed in modal
function openTikTokEmbed(url) {
    // Extract video ID from URL
    const videoId = url.split('/video/')[1]?.split('?')[0] || '';

    modalContent.innerHTML = `
        <blockquote class="tiktok-embed"
            cite="${url}"
            data-video-id="${videoId}"
            style="max-width: 605px; min-width: 325px;">
            <section style="padding: 40px; text-align: center;">
                <p style="color: #888;">Loading TikTok...</p>
            </section>
        </blockquote>
    `;

    embedModal.classList.add('active');

    // Process TikTok embed
    if (window.tiktokEmbed) {
        window.tiktokEmbed.lib.render();
    }
}

// Close modal
modalClose.addEventListener('click', closeModal);
embedModal.addEventListener('click', (e) => {
    if (e.target === embedModal) closeModal();
});

function closeModal() {
    embedModal.classList.remove('active');
    modalContent.innerHTML = '';
}

/*
 * ===========================================
 * TIKTOK-STYLE SWIPER - SETUP GUIDE
 * ===========================================
 *
 * This creates a TikTok-like vertical video feed experience.
 *
 * FOR EACH VIDEO SLIDE:
 * ---------------------
 * 1. data-tiktok-url: Your TikTok video URL
 * 2. Update the background gradient or add video/image
 * 3. Update sidebar stats (likes, comments, shares)
 * 4. Update caption and music name
 *
 * ADDING ACTUAL VIDEOS:
 * ---------------------
 * Replace .video-placeholder with:
 *
 * <video autoplay loop muted playsinline>
 *     <source src="your-video.mp4" type="video/mp4">
 * </video>
 *
 * Or use video thumbnail images:
 * <img src="thumbnail.jpg" alt="Video thumbnail">
 *
 * HOW IT WORKS:
 * -------------
 * 1. Shows custom preview slides (TikTok-style UI)
 * 2. User swipes up/down to navigate
 * 3. Tap on video opens actual TikTok embed
 * 4. Full TikTok post loads in modal
 *
 * FEATURES:
 * ---------
 * - Touch swipe navigation
 * - Mouse wheel support
 * - Keyboard arrows
 * - Progress indicators
 * - Smooth transitions
 *
 */
