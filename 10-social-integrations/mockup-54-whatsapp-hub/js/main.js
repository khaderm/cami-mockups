// Entrance animations
const sections = document.querySelectorAll('.hero-wa, .contact-options, .booking-section, .hours-section');
sections.forEach((section, i) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
        section.style.transition = 'all 0.5s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 100 + (i * 100));
});

// Booking card hover effect
const bookingCards = document.querySelectorAll('.booking-card');
bookingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.transition = 'transform 0.2s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

/*
 * ===========================================
 * FREE WHATSAPP INTEGRATION - NO PAID SERVICES
 * ===========================================
 *
 * WhatsApp "Click to Chat" links are 100% FREE!
 *
 *
 * BASIC FORMAT:
 * -------------
 * https://wa.me/PHONENUMBER
 *
 * Example: https://wa.me/1234567890
 *
 *
 * WITH PRE-FILLED MESSAGE:
 * ------------------------
 * https://wa.me/PHONENUMBER?text=YOUR_MESSAGE
 *
 * Example: https://wa.me/1234567890?text=Hi%20there!
 *
 *
 * URL ENCODING CHEAT SHEET:
 * -------------------------
 * Space  → %20
 * !      → %21
 * '      → %27
 * (      → %28
 * )      → %29
 * *      → %2A
 * -      → - (no encoding needed)
 * .      → . (no encoding needed)
 * _      → _ (no encoding needed)
 *
 * Or use: encodeURIComponent("Your message here")
 *
 *
 * PHONE NUMBER FORMAT:
 * --------------------
 * - Include country code
 * - NO + symbol
 * - NO spaces or dashes
 * - NO parentheses
 *
 * USA: 1234567890 (1 = country code)
 * UK: 447911123456 (44 = country code)
 *
 *
 * TIPS:
 * -----
 * - Pre-fill messages to reduce friction
 * - Use different messages for different services
 * - Add the floating button for visibility
 * - Links work on both mobile and desktop
 *
 *
 * NO API NEEDED!
 * NO THIRD-PARTY SERVICES!
 * 100% FREE FOREVER!
 *
 */

// Helper function to create WhatsApp links
function createWhatsAppLink(phone, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Example usage:
// const link = createWhatsAppLink('1234567890', 'Hi! I want to book a session');
// console.log(link);
