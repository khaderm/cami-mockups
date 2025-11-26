// Filter functionality
const tabs = document.querySelectorAll('.filter-tab');
const items = document.querySelectorAll('.feed-item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        items.forEach(item => {
            if (filter === 'all' || item.dataset.platform === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.3s ease';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Process embeds
if (window.instgrm) {
    window.instgrm.Embeds.process();
}

// Entrance animations
items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
        item.style.transition = 'all 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, 100 + (i * 100));
});

/*
 * ===========================================
 * FREE SOCIAL AGGREGATOR - ALL NATIVE EMBEDS
 * ===========================================
 *
 * This template uses 100% FREE native embeds:
 *
 * INSTAGRAM: <script async src="//www.instagram.com/embed.js"></script>
 * TIKTOK: <script async src="https://www.tiktok.com/embed.js"></script>
 * YOUTUBE: Native iframe embed
 *
 * NO PAID SERVICES REQUIRED!
 *
 *
 * HOW IT WORKS:
 * -------------
 * 1. Each platform provides free embed codes
 * 2. You manually copy/paste each post you want to show
 * 3. The scripts render the embeds automatically
 * 4. Filter tabs let users sort by platform
 *
 *
 * LIMITATIONS:
 * ------------
 * - Manual updates (no auto-refresh)
 * - Must add each post individually
 * - Platform controls embed styling
 *
 *
 * TIPS:
 * -----
 * - Keep 2-3 posts per platform for balance
 * - Update monthly to keep content fresh
 * - Put your best/viral content first
 *
 */
