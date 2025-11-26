// Entrance animations
const sections = document.querySelectorAll('.featured-video, .video-grid-section, .shorts-section');
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
 * FREE YOUTUBE EMBED - HOW TO USE
 * ===========================================
 *
 * YouTube embeds are 100% FREE - no API key needed!
 *
 *
 * STEP 1: Get Video ID
 * --------------------
 * From URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * Video ID: dQw4w9WgXcQ
 *
 * From Short: https://youtube.com/shorts/ABC123xyz
 * Video ID: ABC123xyz
 *
 *
 * STEP 2: Create Embed
 * --------------------
 * <iframe
 *     src="https://www.youtube.com/embed/VIDEO_ID"
 *     title="Video title"
 *     frameborder="0"
 *     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 *     allowfullscreen>
 * </iframe>
 *
 *
 * OPTIONAL PARAMETERS:
 * --------------------
 * ?autoplay=1     - Auto-play video (muted required)
 * ?mute=1         - Mute video
 * ?loop=1         - Loop video
 * ?controls=0     - Hide controls
 * ?start=30       - Start at 30 seconds
 * ?end=60         - End at 60 seconds
 *
 * Example: https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1
 *
 *
 * SUBSCRIBE BUTTON (FREE):
 * ------------------------
 * Just link to: https://youtube.com/@CHANNEL?sub_confirmation=1
 * The sub_confirmation=1 opens the subscribe prompt automatically
 *
 *
 * NO PAID SERVICES NEEDED!
 * - Native iframe embeds are free
 * - No API key required for embeds
 * - YouTube handles all hosting/bandwidth
 *
 */
