// ===== Blob Mouse Follow =====
const blobs = document.querySelectorAll('.blob');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.02;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== Video Cards Parallax =====
const videoCards = document.querySelectorAll('.video-card');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    videoCards.forEach((card, index) => {
        const speed = (3 - index) * 0.015;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;

        if (card.classList.contains('card-1')) {
            card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        } else {
            card.style.transform = `translate(${x}px, ${y}px)`;
        }
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

document.querySelectorAll('.work-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(item);
});

// ===== Work Items Hover Effect =====
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        workItems.forEach(i => {
            if (i !== item) i.style.opacity = '0.4';
        });
    });

    item.addEventListener('mouseleave', () => {
        workItems.forEach(i => i.style.opacity = '1');
    });
});

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

// ===== Stats Counter =====
const statNum = document.querySelector('.stat-num');
if (statNum) {
    const target = '150K+';
    let current = 0;
    const increment = 150 / 50;

    const counter = setInterval(() => {
        current += increment;
        if (current >= 150) {
            statNum.textContent = '150K+';
            clearInterval(counter);
        } else {
            statNum.textContent = Math.floor(current) + 'K+';
        }
    }, 30);
}

// ===== Contact Card Glow Effect =====
const contactCard = document.querySelector('.contact-card');

if (contactCard) {
    contactCard.addEventListener('mousemove', (e) => {
        const rect = contactCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        contactCard.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(168, 85, 247, 0.15), rgba(255, 255, 255, 0.05))`;
    });

    contactCard.addEventListener('mouseleave', () => {
        contactCard.style.background = 'rgba(255, 255, 255, 0.05)';
    });
}

// ===== Nav Hide on Scroll =====
let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

nav.style.transition = 'transform 0.3s ease';

// ===== Video Play Click =====
document.querySelectorAll('.video-card, .item-visual').forEach(el => {
    el.addEventListener('click', () => {
        console.log('Play video');
    });
});
