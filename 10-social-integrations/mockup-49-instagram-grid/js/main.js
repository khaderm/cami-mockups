// Process Instagram embeds when they load
if (window.instgrm) {
    window.instgrm.Embeds.process();
}

// Entrance animations
const embeds = document.querySelectorAll('.embed-wrapper');
embeds.forEach((embed, i) => {
    embed.style.opacity = '0';
    embed.style.transform = 'translateY(20px)';
    setTimeout(() => {
        embed.style.transition = 'all 0.5s ease';
        embed.style.opacity = '1';
        embed.style.transform = 'translateY(0)';
    }, 200 + (i * 150));
});

/*
 * ===========================================
 * FREE INSTAGRAM EMBED - HOW TO USE
 * ===========================================
 *
 * STEP 1: Get embed code from Instagram
 * -------------------------------------
 * - Open Instagram post in browser (instagram.com/p/POSTID)
 * - Click three dots (...)
 * - Click "Embed"
 * - Copy the code
 *
 * STEP 2: Paste into HTML
 * -------------------------------------
 * Replace placeholder blockquote with:
 *
 * <blockquote class="instagram-media"
 *     data-instgrm-captioned
 *     data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/"
 *     data-instgrm-version="14"
 *     style="...">
 *     ...Instagram's generated content...
 * </blockquote>
 *
 * STEP 3: Include the script (already added)
 * -------------------------------------
 * <script async src="//www.instagram.com/embed.js"></script>
 *
 *
 * EMBED OPTIONS:
 * - data-instgrm-captioned: Shows caption (remove for no caption)
 * - Works with: Posts, Reels, Videos
 * - Automatically responsive
 * - 100% FREE - No API key needed
 *
 *
 * LIMITATIONS:
 * - Must manually add each post
 * - No auto-updating feed
 * - Instagram controls the styling
 *
 */
