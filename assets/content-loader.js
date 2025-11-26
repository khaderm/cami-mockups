/*
 * ===========================================
 * CAMI - CONTENT LOADER
 * ===========================================
 *
 * Automatically wires up content.js values to page elements.
 * Add this script after content.js in any mockup.
 *
 */

(function() {
    // Wait for DOM and content.js to be ready
    if (typeof CAMI_CONTENT === 'undefined') {
        console.warn('CAMI_CONTENT not loaded. Include content.js before content-loader.js');
        return;
    }

    const C = CAMI_CONTENT;

    // Helper: Update element text if exists
    function setText(selector, value) {
        document.querySelectorAll(selector).forEach(el => {
            if (value) el.textContent = value;
        });
    }

    // Helper: Update element href if exists
    function setHref(selector, value) {
        document.querySelectorAll(selector).forEach(el => {
            if (value) el.href = value;
        });
    }

    // Helper: Update element src if exists
    function setSrc(selector, value) {
        document.querySelectorAll(selector).forEach(el => {
            if (value) el.src = value;
        });
    }

    // ========== PROFILE NAME ==========
    // Updates: .logo, [data-content="name"], title tag
    setText('.logo', C.profile.name);
    setText('[data-content="name"]', C.profile.name);
    setText('.profile-name', C.profile.name);
    setText('.hero-name', C.profile.name);
    setText('.footer-brand .logo', C.profile.name);

    // Update page title
    if (C.profile.name) {
        document.title = document.title.replace(/CAMI/gi, C.profile.name);
    }

    // ========== TAGLINE ==========
    setText('[data-content="tagline"]', C.profile.tagline);
    setText('.hero-tag', C.profile.tagline);
    setText('.profile-tagline', C.profile.tagline);
    setText('.tagline', C.profile.tagline);

    // ========== BIO ==========
    setText('[data-content="bio"]', C.profile.bio);
    setText('.profile-bio', C.profile.bio);
    setText('.bio', C.profile.bio);

    // ========== SOCIAL LINKS ==========
    // Instagram
    setHref('a[aria-label="Instagram"]', C.social.instagram);
    setHref('a[data-social="instagram"]', C.social.instagram);
    setHref('.social-link-instagram', C.social.instagram);
    setHref('.ig-link', C.social.instagram);
    setText('.instagram-handle', C.social.instagramHandle);
    setText('[data-content="instagram-handle"]', C.social.instagramHandle);

    // TikTok
    setHref('a[aria-label="TikTok"]', C.social.tiktok);
    setHref('a[data-social="tiktok"]', C.social.tiktok);
    setHref('.social-link-tiktok', C.social.tiktok);
    setHref('.tt-link', C.social.tiktok);
    setText('.tiktok-handle', C.social.tiktokHandle);
    setText('[data-content="tiktok-handle"]', C.social.tiktokHandle);

    // YouTube
    if (C.social.youtube) {
        setHref('a[aria-label="YouTube"]', C.social.youtube);
        setHref('a[data-social="youtube"]', C.social.youtube);
        setHref('.social-link-youtube', C.social.youtube);
        setHref('.yt-link', C.social.youtube);
        setText('.youtube-handle', C.social.youtubeHandle);
    }

    // WhatsApp
    if (C.social.whatsapp) {
        setHref('a[aria-label="WhatsApp"]', C.social.whatsapp);
        setHref('a[data-social="whatsapp"]', C.social.whatsapp);
        setHref('.social-link-whatsapp', C.social.whatsapp);
        setHref('.wa-link', C.social.whatsapp);
        setHref('.btn-whatsapp', C.social.whatsapp);
    }

    // WhatsApp with message
    document.querySelectorAll('[data-wa-message]').forEach(el => {
        const msgKey = el.dataset.waMessage;
        const msg = C.whatsappMessages[msgKey] || C.whatsappMessages.general;
        if (C.profile.phone) {
            el.href = `https://wa.me/${C.profile.phone}?text=${encodeURIComponent(msg)}`;
        }
    });

    // ========== EMAIL ==========
    if (C.profile.email) {
        setHref('a[href^="mailto:"]', `mailto:${C.profile.email}`);
        setText('.email', C.profile.email);
        setText('[data-content="email"]', C.profile.email);
    }

    // ========== STATS ==========
    setText('.stat-instagram', C.stats.instagramFollowers);
    setText('.stat-tiktok', C.stats.tiktokFollowers);
    setText('.stat-youtube', C.stats.youtubeSubscribers);
    setText('.stat-total', C.stats.totalReach);
    setText('[data-stat="instagram"]', C.stats.instagramFollowers);
    setText('[data-stat="tiktok"]', C.stats.tiktokFollowers);
    setText('[data-stat="youtube"]', C.stats.youtubeSubscribers);
    setText('[data-stat="total"]', C.stats.totalReach);

    // ========== PROFILE IMAGES ==========
    setSrc('.profile-img', C.images.profileMain);
    setSrc('.profile-img-square', C.images.profileSquare);
    setSrc('.hero-img', C.images.profileHero);
    setSrc('[data-img="profile"]', C.images.profileMain);
    setSrc('[data-img="profile-square"]', C.images.profileSquare);
    setSrc('[data-img="hero"]', C.images.profileHero);

    // ========== GALLERY IMAGES ==========
    document.querySelectorAll('[data-gallery-index]').forEach(el => {
        const idx = parseInt(el.dataset.galleryIndex);
        if (C.images.gallery[idx]) {
            if (el.tagName === 'IMG') {
                el.src = C.images.gallery[idx];
            } else {
                el.style.backgroundImage = `url(${C.images.gallery[idx]})`;
            }
        }
    });

    // Also handle .gallery-img elements in order
    document.querySelectorAll('.gallery-img').forEach((el, idx) => {
        if (C.images.gallery[idx]) {
            if (el.tagName === 'IMG') {
                el.src = C.images.gallery[idx];
            } else {
                el.style.backgroundImage = `url(${C.images.gallery[idx]})`;
            }
        }
    });

    // ========== COPYRIGHT YEAR ==========
    const year = new Date().getFullYear();
    document.querySelectorAll('.copyright-year').forEach(el => {
        el.textContent = year;
    });

    // Update copyright text with name
    document.querySelectorAll('.footer-bottom p, .copyright').forEach(el => {
        el.innerHTML = el.innerHTML
            .replace(/Cami/gi, C.profile.name)
            .replace(/2024/g, year);
    });

    // ========== GLOBAL TEXT REPLACEMENT ==========
    // Replace all instances of "CAMI" and "Cami" with actual name
    // Only in text nodes, not attributes
    function replaceTextInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            // Replace variations: CAMI, Cami, cami
            const newText = text
                .replace(/\bCAMI\b/g, C.profile.name)
                .replace(/\bCami\b/g, C.profile.name)
                .replace(/\bcami\b/g, C.profile.name.toLowerCase());
            if (text !== newText) {
                node.textContent = newText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Skip script and style tags
            if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
                node.childNodes.forEach(replaceTextInNode);
            }
        }
    }
    replaceTextInNode(document.body);

    // ========== SPLIT CHARACTER REPLACEMENT ==========
    // Handle names split into <span class="char">C</span><span class="char">A</span>... etc
    document.querySelectorAll('h1, h2, .logo, .title, [class*="title"]').forEach(el => {
        const chars = el.querySelectorAll('.char');
        if (chars.length > 0) {
            // Get current text from chars
            const currentText = Array.from(chars).map(c => c.textContent).join('');
            if (/^cami$/i.test(currentText)) {
                // Replace with new name split into chars
                const nameChars = C.profile.name.split('');
                el.innerHTML = nameChars.map(char =>
                    `<span class="char">${char}</span>`
                ).join('');
            }
        }
    });

    // ========== UPDATE TITLE ==========
    document.title = document.title
        .replace(/\bCAMI\b/g, C.profile.name)
        .replace(/\bCami\b/g, C.profile.name);

    console.log('✓ CAMI Content loaded successfully');
})();
