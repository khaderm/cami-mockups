// ===== Holographic Shimmer Effect =====
const holoShimmer = document.querySelector('.holo-shimmer');

const triggerShimmer = () => {
    holoShimmer.style.animation = 'none';
    holoShimmer.offsetHeight; // Force reflow
    holoShimmer.style.animation = 'shimmerMove 1s ease-out';
};

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.video-card, .social-holo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// ===== Hero Title Animation =====
const holoTexts = document.querySelectorAll('.hero-title .holo-text');

holoTexts.forEach((text, index) => {
    text.style.opacity = '0';
    text.style.transform = 'translateY(20px)';
    text.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
        triggerShimmer();
    }, 300 + index * 200);
});

// ===== Video Frame Click =====
const videoFrame = document.querySelector('.video-frame');
if (videoFrame) {
    videoFrame.addEventListener('click', () => {
        console.log('Play video');
        triggerShimmer();
        // Glow effect
        const glow = document.querySelector('.frame-glow');
        glow.style.animation = 'none';
        glow.offsetHeight;
        glow.style.animation = 'glowPulse 0.5s ease-out';
    });
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.video-card, .social-holo, .btn-holo');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
        triggerShimmer();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header on Scroll =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        header.style.background = 'rgba(10, 10, 18, 0.95)';
    } else {
        header.style.background = 'rgba(10, 10, 18, 0.8)';
    }

    // Trigger shimmer on scroll direction change
    if (Math.abs(currentScroll - lastScroll) > 100) {
        triggerShimmer();
        lastScroll = currentScroll;
    }
});

header.style.transition = 'background 0.3s ease';

// ===== Stats Counter with Holo Effect =====
const statValues = document.querySelectorAll('.stat-value');

const countUp = (el, target) => {
    const hasK = target.includes('K');
    const hasM = target.includes('M');
    const hasPlus = target.includes('+');
    const num = parseFloat(target.replace(/[KM+]/g, ''));
    const suffix = hasM ? 'M' : hasK ? 'K' : '';

    let current = 0;
    const increment = num / 30;
    const stepTime = 40;

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = Math.floor(num) + suffix + (hasPlus ? '+' : '');
            clearInterval(counter);
            triggerShimmer();
        } else {
            el.textContent = Math.floor(current) + suffix;
        }
    }, stepTime);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            countUp(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statValues.forEach(stat => statsObserver.observe(stat));

// ===== Parallax Holographic Background =====
const holoGradient = document.querySelector('.holo-gradient');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (holoGradient && scrollY < window.innerHeight * 2) {
        holoGradient.style.transform = `rotate(${scrollY * 0.05}deg)`;
    }
});

// ===== Video Card Hover Effects =====
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        triggerShimmer();
    });
});

// ===== Social Links Hover =====
const socialLinks = document.querySelectorAll('.social-holo');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        triggerShimmer();
    });
});

// ===== Random Holographic Pulse =====
setInterval(() => {
    if (Math.random() > 0.7) {
        triggerShimmer();
    }
}, 4000);
