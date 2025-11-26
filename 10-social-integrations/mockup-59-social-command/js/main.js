// Social Command Center Controller
const navTabs = document.querySelectorAll('.nav-tab');
const mobileTabs = document.querySelectorAll('.mobile-tab');
const sections = document.querySelectorAll('.cc-main section');
const embedModal = document.getElementById('embedModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const ytModal = document.getElementById('ytModal');
const ytModalPlayer = document.getElementById('ytModalPlayer');
const ytModalClose = document.getElementById('ytModalClose');

// Platform filtering
function filterByPlatform(platform) {
    sections.forEach(section => {
        const platforms = section.dataset.platforms || '';
        if (platform === 'all' || platforms.includes(platform)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    // Update active states
    navTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.platform === platform);
    });
    mobileTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.platform === platform);
    });
}

// Tab click handlers
navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterByPlatform(tab.dataset.platform);
    });
});

mobileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterByPlatform(tab.dataset.platform);
    });
});

// Instagram items - open embed in modal
const igItems = document.querySelectorAll('.ig-item');
igItems.forEach(item => {
    item.addEventListener('click', () => {
        const postUrl = item.dataset.postUrl;
        openInstagramEmbed(postUrl);
    });
});

function openInstagramEmbed(url) {
    modalContent.innerHTML = `
        <blockquote class="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="${url}"
            data-instgrm-version="14"
            style="max-width:400px; width:100%;">
            <div style="padding: 40px; text-align: center;">
                <p style="color: #888;">Loading Instagram...</p>
            </div>
        </blockquote>
    `;

    embedModal.classList.add('active');

    // Process Instagram embed
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
}

// TikTok items - open embed in modal
const ttItems = document.querySelectorAll('.tt-item');
ttItems.forEach(item => {
    item.addEventListener('click', () => {
        const tiktokUrl = item.dataset.tiktokUrl;
        openTikTokEmbed(tiktokUrl);
    });
});

function openTikTokEmbed(url) {
    const videoId = url.split('/video/')[1]?.split('?')[0] || '';

    modalContent.innerHTML = `
        <blockquote class="tiktok-embed"
            cite="${url}"
            data-video-id="${videoId}"
            style="max-width: 400px; min-width: 300px;">
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

// YouTube items - open in modal player
const ytItems = document.querySelectorAll('.yt-item');
ytItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoId = item.dataset.videoId;
        openYouTubePlayer(videoId);
    });
});

function openYouTubePlayer(videoId) {
    ytModalPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    ytModal.classList.add('active');
}

// Close modals
modalClose.addEventListener('click', closeEmbedModal);
embedModal.addEventListener('click', (e) => {
    if (e.target === embedModal) closeEmbedModal();
});

function closeEmbedModal() {
    embedModal.classList.remove('active');
    modalContent.innerHTML = '';
}

ytModalClose.addEventListener('click', closeYtModal);
ytModal.addEventListener('click', (e) => {
    if (e.target === ytModal) closeYtModal();
});

function closeYtModal() {
    ytModal.classList.remove('active');
    ytModalPlayer.src = '';
}

// Keyboard escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEmbedModal();
        closeYtModal();
    }
});

// Entrance animations
sections.forEach((section, i) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
        section.style.transition = 'all 0.5s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 200 + (i * 100));
});

/*
 * ===========================================
 * SOCIAL COMMAND CENTER - SETUP GUIDE
 * ===========================================
 *
 * This creates a unified social media hub/dashboard.
 *
 * SETUP:
 * ------
 *
 * 1. YOUTUBE:
 *    - Replace YOUR_VIDEO_ID in featured-video iframe
 *    - Update data-video-id on each yt-item
 *    - Update video titles, durations, views
 *    - Get video IDs from: youtube.com/watch?v=VIDEO_ID
 *
 * 2. INSTAGRAM:
 *    - Replace data-post-url on each ig-item
 *    - Format: instagram.com/p/POST_ID/
 *    - Get from share link on any post
 *
 * 3. TIKTOK:
 *    - Replace data-tiktok-url on each tt-item
 *    - Format: tiktok.com/@username/video/VIDEO_ID
 *    - Update view counts
 *
 * 4. WHATSAPP:
 *    - Replace 1234567890 with your number
 *    - Format: country code + number (no + or spaces)
 *
 * 5. STATS:
 *    - Update follower counts in stats-bar
 *
 * 6. PROFILE LINKS:
 *    - Update all @cami handles
 *    - Update all profile URLs
 *
 * FEATURES:
 * ---------
 * - Platform filtering (All/IG/TT/YT tabs)
 * - Native embeds for IG and TikTok
 * - YouTube player modal
 * - Responsive grid layout
 * - Mobile bottom navigation
 * - Stats overview bar
 * - Quick connect links
 *
 * ALL FREE - Uses native embed APIs!
 *
 */
