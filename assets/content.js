/*
 * ===========================================
 * CAMI - CENTRAL CONTENT CONFIGURATION
 * ===========================================
 *
 * Update this file with your actual content.
 * All mockups will reference these values.
 *
 * HOW TO USE:
 * 1. Update the values below with your info
 * 2. Add your images to /assets/images/
 * 3. All mockups will automatically use this content
 *
 */

const CAMI_CONTENT = {

    // ========== PROFILE INFO ==========
    profile: {
        name: "Camila Valdivia",
        tagline: "Content Creator | Event Planner | Brand Ambassador",
        bio: "Creating memorable experiences and content that connects. Available for collaborations, events, and partnerships.",
        email: "hello@camilavaldivia.com",
        phone: "", // For WhatsApp (country code + number, no spaces)
    },

    // ========== SOCIAL LINKS ==========
    social: {
        instagram: "https://www.instagram.com/camila.valdiviaa",
        instagramHandle: "@camila.valdiviaa",
        tiktok: "https://www.tiktok.com/@camilavaldiviaa",
        tiktokHandle: "@camilavaldiviaa",
        youtube: "",
        youtubeHandle: "",
        twitter: "",
        whatsapp: "",
    },

    // ========== STATS (Update with real numbers) ==========
    stats: {
        instagramFollowers: "125K",
        tiktokFollowers: "89K",
        youtubeSubscribers: "45K",
        totalReach: "259K",
    },

    // ========== SERVICES ==========
    services: [
        {
            title: "Brand Collaborations",
            description: "Sponsored posts, product reviews, brand ambassadorships",
            icon: "*"
        },
        {
            title: "Event Planning",
            description: "Birthday parties, corporate events, product launches",
            icon: "@"
        },
        {
            title: "Content Creation",
            description: "Social media content, UGC, Reels & TikToks",
            icon: "#"
        },
        {
            title: "Appearances",
            description: "Event hosting, meet & greets, club appearances",
            icon: "%"
        }
    ],

    // ========== IMAGES ==========
    // Add your images to /assets/images/ and update paths here
    images: {
        // Profile images
        profileMain: "/assets/images/profile/main.jpg",
        profileSquare: "/assets/images/profile/square.jpg",
        profileHero: "/assets/images/profile/hero.jpg",

        // Gallery images (for Instagram-style grids)
        gallery: [
            "/assets/images/gallery/01.jpg",
            "/assets/images/gallery/02.jpg",
            "/assets/images/gallery/03.jpg",
            "/assets/images/gallery/04.jpg",
            "/assets/images/gallery/05.jpg",
            "/assets/images/gallery/06.jpg",
            "/assets/images/gallery/07.jpg",
            "/assets/images/gallery/08.jpg",
            "/assets/images/gallery/09.jpg",
        ],

        // Video thumbnails
        thumbnails: [
            "/assets/images/thumbnails/video-01.jpg",
            "/assets/images/thumbnails/video-02.jpg",
            "/assets/images/thumbnails/video-03.jpg",
            "/assets/images/thumbnails/video-04.jpg",
        ]
    },

    // ========== INSTAGRAM POSTS ==========
    // Replace with your actual Instagram post URLs
    instagramPosts: [
        "https://www.instagram.com/p/POST_ID_1/",
        "https://www.instagram.com/p/POST_ID_2/",
        "https://www.instagram.com/p/POST_ID_3/",
        "https://www.instagram.com/p/POST_ID_4/",
        "https://www.instagram.com/p/POST_ID_5/",
        "https://www.instagram.com/p/POST_ID_6/",
    ],

    // ========== TIKTOK VIDEOS ==========
    // Replace with your actual TikTok video URLs
    tiktokVideos: [
        {
            url: "https://www.tiktok.com/@cami/video/VIDEO_ID_1",
            views: "1.2M",
            caption: "POV: When the party planning comes together"
        },
        {
            url: "https://www.tiktok.com/@cami/video/VIDEO_ID_2",
            views: "890K",
            caption: "Get ready with me for brand event"
        },
        {
            url: "https://www.tiktok.com/@cami/video/VIDEO_ID_3",
            views: "456K",
            caption: "Behind the scenes content creation"
        },
    ],

    // ========== YOUTUBE VIDEOS ==========
    // Replace VIDEO_ID with your actual YouTube video IDs
    // Get ID from: youtube.com/watch?v=VIDEO_ID
    youtubeVideos: [
        {
            id: "YOUR_VIDEO_ID_1",
            title: "A Week in My Life as a Content Creator",
            views: "12,456",
            duration: "15:32"
        },
        {
            id: "YOUR_VIDEO_ID_2",
            title: "Get Ready With Me for Brand Event",
            views: "8,234",
            duration: "8:24"
        },
        {
            id: "YOUR_VIDEO_ID_3",
            title: "Restaurant Reviews: Hidden Gems",
            views: "15,678",
            duration: "12:08"
        },
        {
            id: "YOUR_VIDEO_ID_4",
            title: "Event Planning Behind the Scenes",
            views: "9,456",
            duration: "18:22"
        },
    ],

    // ========== WHATSAPP QUICK MESSAGES ==========
    whatsappMessages: {
        general: "Hi Cami! I'd love to connect!",
        collab: "Hi Cami! I'm reaching out about a potential brand collaboration.",
        event: "Hi Cami! I'm planning an event and would love your help.",
        booking: "Hi Cami! I'd like to book you for an upcoming event."
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.CAMI_CONTENT = CAMI_CONTENT;
}

// Export for modules
if (typeof module !== 'undefined') {
    module.exports = CAMI_CONTENT;
}
