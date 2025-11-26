// ===== Parallax Stickers =====
const stickers = document.querySelectorAll('.sticker');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    stickers.forEach((sticker, index) => {
        const speed = (index + 1) * 0.02;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        sticker.style.transform = `translate(${x}px, ${y}px) rotate(${sticker.classList.contains('sticker-1') ? 12 : -8}deg)`;
    });
});

// ===== Video Cards Interaction =====
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        videoCards.forEach(c => {
            if (c !== card) c.style.opacity = '0.3';
        });
    });

    card.addEventListener('mouseleave', () => {
        videoCards.forEach(c => c.style.opacity = '1');
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.videos, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    scrollObserver.observe(section);
});

// ===== Magnetic Buttons =====
const buttons = document.querySelectorAll('.contact-btn, .video-frame');

buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ===== Title Glitch Effect on Hover =====
const titleLines = document.querySelectorAll('.title-line');

titleLines.forEach(line => {
    line.addEventListener('mouseenter', () => {
        line.style.animation = 'glitch 0.3s ease';
        setTimeout(() => {
            line.style.animation = '';
        }, 300);
    });
});

// Add glitch keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-3px, 3px); }
        40% { transform: translate(3px, -3px); }
        60% { transform: translate(-3px, -3px); }
        80% { transform: translate(3px, 3px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Marquee Speed on Scroll =====
const marqueeTrack = document.querySelector('.marquee-track');
let scrollSpeed = 1;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    scrollSpeed = 1 + scrollY * 0.002;
    marqueeTrack.style.animationDuration = `${20 / scrollSpeed}s`;
});

// ===== Video Play Click =====
document.querySelectorAll('.video-frame, .card-inner').forEach(el => {
    el.addEventListener('click', () => {
        console.log('Play video');
        // Add video modal logic here
    });
});
