// ===== Neon Pulse Effect =====
const titleNeon = document.querySelector('.title-neon');

const pulseNeon = () => {
    if (titleNeon) {
        titleNeon.style.textShadow = `
            0 0 20px #ff71ce,
            0 0 40px #ff71ce,
            0 0 80px #ff71ce
        `;
        setTimeout(() => {
            titleNeon.style.textShadow = '';
        }, 100);
    }
};

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.video-card-wave, .social-btn-wave');

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
const titleChrome = document.querySelector('.hero-title .title-chrome');
const heroTitleNeon = document.querySelector('.hero-title .title-neon');

if (titleChrome && heroTitleNeon) {
    titleChrome.style.opacity = '0';
    titleChrome.style.transform = 'translateY(20px)';
    titleChrome.style.transition = 'all 0.6s ease';

    heroTitleNeon.style.opacity = '0';
    heroTitleNeon.style.transform = 'translateY(20px)';
    heroTitleNeon.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        titleChrome.style.opacity = '1';
        titleChrome.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroTitleNeon.style.opacity = '1';
        heroTitleNeon.style.transform = 'translateY(0)';
        pulseNeon();
    }, 400);
}

// ===== Video Frame Click =====
const frameContent = document.querySelector('.frame-content');
if (frameContent) {
    frameContent.addEventListener('click', () => {
        console.log('Play video');
        pulseNeon();
        // Chrome flash
        const chrome = document.querySelector('.frame-chrome');
        chrome.style.background = 'linear-gradient(135deg, #fff, #fff)';
        setTimeout(() => {
            chrome.style.background = '';
        }, 100);
    });

    document.querySelector('.frame-chrome').style.transition = 'background 0.1s ease';
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.video-card-wave, .social-btn-wave, .btn-wave');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
        pulseNeon();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 10, 46, 0.98)';
        header.style.boxShadow = '0 0 30px rgba(255, 113, 206, 0.3)';
    } else {
        header.style.background = 'rgba(26, 10, 46, 0.9)';
        header.style.boxShadow = 'none';
    }
});

header.style.transition = 'all 0.3s ease';

// ===== Stats Counter =====
const statVals = document.querySelectorAll('.stat-val');

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
            pulseNeon();
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

statVals.forEach(stat => statsObserver.observe(stat));

// ===== Video Card Hover =====
const videoCards = document.querySelectorAll('.video-card-wave');

videoCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        pulseNeon();
    });
});

// ===== Sun Parallax =====
const sun = document.querySelector('.sun');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (sun && scrollY < window.innerHeight) {
        sun.style.transform = `translateX(-50%) translateY(${scrollY * 0.3}px)`;
    }
});

// ===== Grid Animation Speed on Scroll =====
const gridFloor = document.querySelector('.grid-floor');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const speed = Math.max(0.5, 2 - scrollY / 500);
    if (gridFloor) {
        gridFloor.style.animationDuration = `${speed}s`;
    }
});

// ===== Random Neon Flicker =====
setInterval(() => {
    if (Math.random() > 0.7) {
        pulseNeon();
    }
}, 5000);

// ===== Social Button Hover Glow =====
const socialBtns = document.querySelectorAll('.social-btn-wave');

socialBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        pulseNeon();
    });
});
