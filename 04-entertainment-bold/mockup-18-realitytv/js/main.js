// ===== Dramatic Flash Effect =====
const dramaOverlay = document.querySelector('.drama-overlay');

const dramaticFlash = () => {
    dramaOverlay.style.background = 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)';
    setTimeout(() => {
        dramaOverlay.style.background = '';
    }, 100);
};

dramaOverlay.style.transition = 'background 0.1s ease';

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.episode-card, .social-card');

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
const titleName = document.querySelector('.title-name');
const titleSmall = document.querySelector('.title-small');

if (titleName && titleSmall) {
    titleSmall.style.opacity = '0';
    titleSmall.style.transform = 'translateY(10px)';
    titleSmall.style.transition = 'all 0.5s ease';

    titleName.style.opacity = '0';
    titleName.style.transform = 'translateY(20px)';
    titleName.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        titleSmall.style.opacity = '1';
        titleSmall.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        titleName.style.opacity = '1';
        titleName.style.transform = 'translateY(0)';
        dramaticFlash();
    }, 500);
}

// ===== Video Frame Click =====
const videoFrame = document.querySelector('.video-frame');
if (videoFrame) {
    videoFrame.addEventListener('click', () => {
        console.log('Play video');
        dramaticFlash();
        dramaticFlash();
    });
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.episode-card, .social-card');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
        dramaticFlash();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.9))';
    } else {
        header.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent)';
    }
});

header.style.transition = 'background 0.3s ease';

// ===== Stats Counter =====
const statNums = document.querySelectorAll('.stat-num');

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
            dramaticFlash();
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

// ===== Episode Card Hover =====
const episodeCards = document.querySelectorAll('.episode-card');

episodeCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        dramaticFlash();
    });
});

// ===== Social Card Hover Effect =====
const socialCards = document.querySelectorAll('.social-card');

socialCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const cta = card.querySelector('.card-cta');
        cta.style.transform = 'translateX(5px)';
    });

    card.addEventListener('mouseleave', () => {
        const cta = card.querySelector('.card-cta');
        cta.style.transform = '';
    });
});

document.querySelectorAll('.card-cta').forEach(cta => {
    cta.style.transition = 'transform 0.3s ease';
});

// ===== Quote Typing Effect =====
const quoteText = document.querySelector('.quote-text');

if (quoteText) {
    const text = quoteText.textContent;
    quoteText.textContent = '';
    quoteText.style.visibility = 'visible';

    let i = 0;
    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                quoteText.textContent += text[i];
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 30);
    }, 800);
}

// ===== Confessional Frame Glow =====
const confFrame = document.querySelector('.conf-frame');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (confFrame && scrollY < window.innerHeight) {
        const intensity = Math.max(0, 1 - scrollY / 400);
        confFrame.style.boxShadow = `0 0 ${40 * intensity}px rgba(212, 175, 55, ${0.2 * intensity})`;
    }
});

// ===== Live Badge Interaction =====
const badgeLive = document.querySelector('.badge-live');

if (badgeLive) {
    setInterval(() => {
        badgeLive.style.background = 'rgba(255, 255, 255, 0.2)';
        setTimeout(() => {
            badgeLive.style.background = '';
        }, 100);
    }, 5000);

    badgeLive.style.transition = 'background 0.1s ease';
}
