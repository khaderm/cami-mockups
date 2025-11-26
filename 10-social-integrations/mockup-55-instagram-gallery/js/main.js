// Gallery & Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxClose = document.getElementById('lightbox-close');

// Open lightbox with Instagram embed
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const postUrl = item.dataset.postUrl;

        // Create Instagram embed
        lightboxContent.innerHTML = `
            <blockquote class="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="${postUrl}"
                data-instgrm-version="14"
                style="max-width:540px; width:100%;">
                <div style="padding: 40px; text-align: center;">
                    <p style="color: #888;">Loading Instagram post...</p>
                </div>
            </blockquote>
        `;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Process the embed
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    });
});

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxContent.innerHTML = '';
}

// Stagger entrance animations
galleryItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    setTimeout(() => {
        item.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    }, 100 + (i * 50));
});

/*
 * ===========================================
 * CUSTOM INSTAGRAM GALLERY - HOW TO SET UP
 * ===========================================
 *
 * This is a custom-built gallery that uses FREE Instagram embeds.
 *
 * FOR EACH GALLERY ITEM:
 * ----------------------
 * 1. data-post-url: Your Instagram post/reel URL
 * 2. background-image: Thumbnail image URL
 * 3. data-type: "image", "reel", or "carousel"
 * 4. Update the stats (likes, comments, views)
 *
 * GETTING THUMBNAIL IMAGES:
 * -------------------------
 * Option 1: Screenshot your post and upload to your hosting
 * Option 2: Use placeholder service for demo (picsum.photos)
 * Option 3: Use Instagram's CDN URL (inspect element on your post)
 *
 * LAYOUT OPTIONS:
 * ---------------
 * - Default: Square (1:1)
 * - class="tall": Vertical (spans 2 rows)
 * - class="wide": Horizontal (spans 2 columns)
 *
 * HOW IT WORKS:
 * -------------
 * 1. User sees custom thumbnail grid
 * 2. On click, lightbox opens with actual Instagram embed
 * 3. Instagram embed loads via embed.js (FREE)
 * 4. User can interact with full Instagram post
 *
 */
