// YouTube Theater Mode Controller
const mainPlayer = document.getElementById('mainPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');
const queueItems = document.querySelectorAll('.queue-item');
const autoplayToggle = document.getElementById('autoplayToggle');

let autoplay = true;
let currentIndex = 0;

// Load video in player
function loadVideo(videoId, title, views) {
    mainPlayer.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
    videoTitle.textContent = title;

    // Update playing state
    queueItems.forEach(item => item.classList.remove('playing'));
    const playingItem = document.querySelector(`[data-video-id="${videoId}"]`);
    if (playingItem) {
        playingItem.classList.add('playing');
        currentIndex = Array.from(queueItems).indexOf(playingItem);
    }
}

// Queue item click
queueItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoId = item.dataset.videoId;
        const title = item.dataset.title;
        const views = item.dataset.views;
        loadVideo(videoId, title, views);
    });
});

// Autoplay toggle
autoplayToggle.addEventListener('click', () => {
    autoplay = !autoplay;
    autoplayToggle.classList.toggle('active', autoplay);
});

// Initialize autoplay as active
autoplayToggle.classList.add('active');

// Sidebar navigation
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        // In a full implementation, this would switch content sections
    });
});

// Entrance animations
const sections = document.querySelectorAll('.player-section, .queue-section');
sections.forEach((section, i) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
        section.style.transition = 'all 0.5s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 200 + (i * 150));
});

/*
 * ===========================================
 * YOUTUBE THEATER MODE - SETUP GUIDE
 * ===========================================
 *
 * This creates a custom YouTube viewing experience.
 *
 * SETUP:
 * ------
 * 1. Replace YOUR_VIDEO_ID in the main player iframe
 * 2. Update each queue-item with:
 *    - data-video-id: YouTube video ID
 *    - data-title: Video title
 *    - data-views: View count
 *
 * GETTING VIDEO IDs:
 * ------------------
 * From: youtube.com/watch?v=dQw4w9WgXcQ
 * Video ID: dQw4w9WgXcQ
 *
 * OPTIONAL - ADD THUMBNAILS:
 * --------------------------
 * YouTube provides thumbnails at:
 * https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg
 *
 * Replace .queue-thumb background with:
 * style="background-image: url('https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg')"
 *
 * FEATURES:
 * ---------
 * - Theater-style layout
 * - Video queue/playlist
 * - Click to switch videos
 * - Autoplay toggle
 * - Responsive design
 *
 * ALL FREE - Uses native YouTube embeds!
 *
 */
