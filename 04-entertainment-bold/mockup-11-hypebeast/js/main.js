// ===== Random Glitch Effect =====
const triggerGlitch = () => {
    const overlay = document.querySelector('.glitch-overlay');
    overlay.style.background = `rgba(${Math.random() > 0.5 ? '255, 0, 51' : '0, 255, 255'}, 0.05)`;
    setTimeout(() => {
        overlay.style.background = 'transparent';
    }, 50);
};

// Random glitch every few seconds
setInterval(() => {
    if (Math.random() > 0.7) {
        triggerGlitch();
    }
}, 2000);

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feed-item, .social-block');

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
const glitchTexts = document.querySelectorAll('.hero-title .glitch-text');

glitchTexts.forEach((text, index) => {
    text.style.opacity = '0';
    text.style.transform = 'translateX(-20px)';
    text.style.transition = 'all 0.4s ease';

    setTimeout(() => {
        text.style.opacity = '1';
        text.style.transform = 'translateX(0)';
        // Trigger glitch on reveal
        triggerGlitch();
    }, 200 + index * 150);
});

// ===== Video Box Click =====
const videoBox = document.querySelector('.video-box');
if (videoBox) {
    videoBox.addEventListener('click', () => {
        console.log('Play video');
        triggerGlitch();
        triggerGlitch();
    });
}

// ===== Touch Feedback with Glitch =====
const touchElements = document.querySelectorAll('.feed-item, .social-block, .btn-street');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
        triggerGlitch();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Parallax Background Text =====
const bgText = document.querySelector('.hero-bg-text');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (bgText && scrollY < window.innerHeight) {
        bgText.style.transform = `translate(-50%, -50%) translateX(${scrollY * 0.2}px)`;
    }
});

// ===== Header Glitch on Scroll =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (Math.abs(currentScroll - lastScroll) > 50) {
        triggerGlitch();
    }

    if (currentScroll > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'transparent';
    }

    lastScroll = currentScroll;
});

header.style.transition = 'background 0.3s ease';

// ===== Stats Counter =====
const statBigs = document.querySelectorAll('.stat-big');

const countUp = (el, target) => {
    const hasK = target.includes('K');
    const hasM = target.includes('M');
    const num = parseFloat(target.replace(/[KM]/g, ''));
    const suffix = hasM ? 'M' : hasK ? 'K' : '';

    let current = 0;
    const increment = num / 30;
    const stepTime = 40;

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = Math.floor(num) + suffix;
            clearInterval(counter);
            triggerGlitch();
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

statBigs.forEach(stat => statsObserver.observe(stat));

// ===== Social Block Hover Sound Effect (Visual) =====
const socialBlocks = document.querySelectorAll('.social-block');

socialBlocks.forEach(block => {
    block.addEventListener('mouseenter', () => {
        triggerGlitch();
    });
});
