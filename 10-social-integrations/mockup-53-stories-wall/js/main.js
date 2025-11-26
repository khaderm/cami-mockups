// Story Viewer
const storyCards = document.querySelectorAll('.story-card');
const viewer = document.getElementById('story-viewer');
const closeBtn = document.querySelector('.close-viewer');

storyCards.forEach(card => {
    card.addEventListener('click', () => {
        viewer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    viewer.classList.remove('active');
    document.body.style.overflow = '';
});

// Navigation in viewer
const navPrev = document.querySelector('.nav-prev');
const navNext = document.querySelector('.nav-next');
const progressSegments = document.querySelectorAll('.progress-segment');
let currentSegment = 0;

function nextStory() {
    progressSegments[currentSegment].classList.remove('active');
    currentSegment = (currentSegment + 1) % progressSegments.length;
    progressSegments[currentSegment].classList.add('active');
}

function prevStory() {
    progressSegments[currentSegment].classList.remove('active');
    currentSegment = currentSegment === 0 ? progressSegments.length - 1 : currentSegment - 1;
    progressSegments[currentSegment].classList.add('active');
}

navNext.addEventListener('click', nextStory);
navPrev.addEventListener('click', prevStory);

// Close on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewer.classList.contains('active')) {
        viewer.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Entrance animations
storyCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }, 100 + (i * 80));
});

/*
 * ===========================================
 * STORIES INTEGRATION NOTES
 * ===========================================
 *
 * Instagram Stories cannot be embedded directly due to API limitations.
 * However, you can:
 *
 * 1. Use Instagram Graph API to fetch story insights (Business accounts)
 * 2. Use services like Storyly or StorifyMe for story-like experiences
 * 3. Create your own stories using uploaded media
 *
 * TikTok videos can be embedded:
 *
 * <blockquote class="tiktok-embed"
 *     cite="https://www.tiktok.com/@username/video/VIDEO_ID"
 *     data-video-id="VIDEO_ID">
 * </blockquote>
 * <script async src="https://www.tiktok.com/embed.js"></script>
 *
 * For a stories-like experience with your own content,
 * consider using libraries like:
 * - Zuck.js (https://github.com/nicollasricas/zuck.js)
 * - Stories.js
 *
 */
