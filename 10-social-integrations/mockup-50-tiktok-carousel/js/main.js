// Entrance animations
const wrappers = document.querySelectorAll('.tt-embed-wrapper');
wrappers.forEach((wrapper, i) => {
    wrapper.style.opacity = '0';
    wrapper.style.transform = 'translateY(20px)';
    setTimeout(() => {
        wrapper.style.transition = 'all 0.5s ease';
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'translateY(0)';
    }, 200 + (i * 150));
});

/*
 * ===========================================
 * FREE TIKTOK EMBED - HOW TO USE
 * ===========================================
 *
 * STEP 1: Get embed code from TikTok
 * ----------------------------------
 * - Open TikTok video in app or browser
 * - Tap Share button
 * - Select "Embed"
 * - Copy the code
 *
 * STEP 2: Paste into HTML
 * ----------------------------------
 * Replace placeholder blockquote with:
 *
 * <blockquote class="tiktok-embed"
 *     cite="https://www.tiktok.com/@username/video/1234567890"
 *     data-video-id="1234567890"
 *     style="max-width: 605px; min-width: 325px;">
 *     <section>
 *         <a target="_blank" href="https://www.tiktok.com/@username">@username</a>
 *     </section>
 * </blockquote>
 *
 * STEP 3: Include the script (already added)
 * ----------------------------------
 * <script async src="https://www.tiktok.com/embed.js"></script>
 *
 *
 * FEATURES:
 * - Plays video directly on your site
 * - Shows likes, comments, shares
 * - Links to TikTok profile
 * - 100% FREE - No API key needed
 *
 *
 * LIMITATIONS:
 * - Must manually add each video
 * - No auto-updating feed
 * - TikTok controls the styling
 * - Video height is fixed by TikTok
 *
 */
