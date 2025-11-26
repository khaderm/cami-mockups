// ===== Neon Glow Follow (Desktop) =====
const orbs = document.querySelectorAll('.glow-orb');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.03;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.video-card, .btn-neon');

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

// ===== Title Animation =====
const neonTexts = document.querySelectorAll('.hero-title .neon-text');

neonTexts.forEach((text, index) => {
    text.style.opacity = '0';
    text.style.transform = 'translateX(-30px)';
    text.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        text.style.opacity = '1';
        text.style.transform = 'translateX(0)';
    }, 300 + index * 200);
});

// ===== Video Player Click =====
const playerScreen = document.querySelector('.player-screen');
if (playerScreen) {
    playerScreen.addEventListener('click', () => {
        console.log('Play main video');
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255, 45, 149, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        playerScreen.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Video Scroll Drag =====
const videoScroll = document.querySelector('.video-scroll');

if (videoScroll) {
    let isDown = false;
    let startX;
    let scrollLeft;

    videoScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - videoScroll.offsetLeft;
        scrollLeft = videoScroll.scrollLeft;
    });

    videoScroll.addEventListener('mouseleave', () => isDown = false);
    videoScroll.addEventListener('mouseup', () => isDown = false);

    videoScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - videoScroll.offsetLeft;
        const walk = (x - startX) * 2;
        videoScroll.scrollLeft = scrollLeft - walk;
    });
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.video-card, .btn-neon, .player-screen');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.borderBottom = '1px solid rgba(255, 45, 149, 0.3)';
    } else {
        header.style.borderBottom = 'none';
    }
});

// ===== Stats Counter Animation =====
const statNums = document.querySelectorAll('.stat-num');

const countUp = (el, target) => {
    const hasK = target.includes('K');
    const hasM = target.includes('M');
    const hasPlus = target.includes('+');
    const num = parseFloat(target.replace(/[KM+]/g, ''));
    const suffix = (hasM ? 'M' : hasK ? 'K' : '') + (hasPlus ? '+' : '');

    let current = 0;
    const increment = num / 40;
    const stepTime = 30;

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = Math.floor(num) + suffix;
            clearInterval(counter);
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

statNums.forEach(stat => statsObserver.observe(stat));
