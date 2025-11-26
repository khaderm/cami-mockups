// WhatsApp Chat Interface Controller
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const waOverlay = document.getElementById('waOverlay');
const waBtn = document.getElementById('waBtn');
const waCancel = document.getElementById('waCancel');
const waMessage = document.getElementById('waMessage');
const serviceModal = document.getElementById('serviceModal');
const modalClose = document.getElementById('modalClose');
const optionBtns = document.querySelectorAll('.option-btn');
const serviceDetails = document.querySelectorAll('.service-detail');
const quickMsgBtns = document.querySelectorAll('.quick-msg-btn');

// Replace with actual phone number (with country code, no + or spaces)
const WHATSAPP_NUMBER = '1234567890';

// Generate WhatsApp URL
function generateWhatsAppUrl(message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

// Show WhatsApp overlay
function showWhatsAppOverlay(message) {
    const url = generateWhatsAppUrl(message);
    waBtn.href = url;
    waMessage.textContent = `"${message.substring(0, 50)}${message.length > 50 ? '...' : ''}"`;
    waOverlay.classList.add('active');
}

// Hide WhatsApp overlay
function hideWhatsAppOverlay() {
    waOverlay.classList.remove('active');
}

// Add message to chat (visual only)
function addMessage(text, type = 'sent') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
        <span class="message-time">Just now</span>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle send button
sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, 'sent');
        messageInput.value = '';

        // Small delay then show WhatsApp overlay
        setTimeout(() => {
            showWhatsAppOverlay(message);
        }, 500);
    }
});

// Handle enter key
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

// Cancel overlay
waCancel.addEventListener('click', hideWhatsAppOverlay);
waOverlay.addEventListener('click', (e) => {
    if (e.target === waOverlay) hideWhatsAppOverlay();
});

// Service option buttons
optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.dataset.service;
        openServiceModal(service);
    });
});

// Open service modal
function openServiceModal(service) {
    serviceDetails.forEach(detail => {
        detail.classList.remove('active');
        if (detail.dataset.service === service) {
            detail.classList.add('active');
        }
    });
    serviceModal.classList.add('active');
}

// Close service modal
modalClose.addEventListener('click', () => {
    serviceModal.classList.remove('active');
});

serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        serviceModal.classList.remove('active');
    }
});

// Quick message buttons
quickMsgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const message = btn.dataset.msg;
        serviceModal.classList.remove('active');

        // Add to chat and open WhatsApp
        setTimeout(() => {
            addMessage(message, 'sent');
            setTimeout(() => {
                showWhatsAppOverlay(message);
            }, 500);
        }, 300);
    });
});

// Keyboard escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideWhatsAppOverlay();
        serviceModal.classList.remove('active');
    }
});

// Entrance animations
const messages = document.querySelectorAll('.message');
messages.forEach((msg, i) => {
    msg.style.opacity = '0';
    msg.style.transform = 'translateY(10px)';
    setTimeout(() => {
        msg.style.transition = 'all 0.3s ease';
        msg.style.opacity = '1';
        msg.style.transform = 'translateY(0)';
    }, 300 + (i * 200));
});

/*
 * ===========================================
 * WHATSAPP CHAT INTERFACE - SETUP GUIDE
 * ===========================================
 *
 * This creates a chat-like interface that connects to WhatsApp.
 *
 * SETUP:
 * ------
 * 1. Replace WHATSAPP_NUMBER with actual number
 *    Format: Country code + number, no + or spaces
 *    Example: 12125551234 (US number)
 *
 * 2. Customize service options in the HTML:
 *    - Edit the option buttons
 *    - Update service details and descriptions
 *    - Modify quick message templates
 *
 * HOW IT WORKS:
 * -------------
 * 1. User types message or selects quick option
 * 2. Message appears in chat (visual only)
 * 3. WhatsApp overlay shows with "Open WhatsApp" button
 * 4. Click opens wa.me link with pre-filled message
 * 5. User continues conversation in WhatsApp
 *
 * QUICK MESSAGE TEMPLATES:
 * ------------------------
 * Update data-msg attributes on quick-msg-btn elements
 * with your preferred pre-written messages.
 *
 * Use [brackets] for placeholders users should fill in.
 *
 * FEATURES:
 * ---------
 * - WhatsApp-style UI/UX
 * - Service category selection
 * - Quick message templates
 * - Custom message input
 * - Mobile-first design
 *
 * 100% FREE - Uses native wa.me links!
 *
 */
