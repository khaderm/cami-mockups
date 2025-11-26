// ===== POW! Effect =====
const createPow = (x, y, text = 'POW!') => {
    const pow = document.createElement('div');
    pow.textContent = text;
    pow.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-family: 'Bangers', cursive;
        font-size: 2rem;
        color: #ff3333;
        text-shadow: 2px 2px 0 #ffeb00;
        pointer-events: none;
        z-index: 1000;
        animation: powPop 0.5s ease-out forwards;
    `;
    document.body.appendChild(pow);
    setTimeout(() => pow.remove(), 500);
};

// Add POW animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes powPop {
        0% { transform: scale(0) rotate(-20deg); opacity: 1; }
        50% { transform: scale(1.3) rotate(10deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.video-card, .social-btn');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotate(0deg)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = `translateY(30px) rotate(${i % 2 === 0 ? '-3deg' : '3deg'})`;
        el.style.transition = 'all 0.4s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// ===== Title Animation =====
const titleLines = document.querySelectorAll('.title-line');

titleLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-30px) rotate(-5deg)';
    line.style.transition = 'all 0.4s ease';

    setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateX(0) rotate(0deg)';
    }, 200 + index * 150);
});

// ===== Video Panel Click =====
const videoPanel = document.querySelector('.panel-content');
if (videoPanel) {
    videoPanel.addEventListener('click', (e) => {
        console.log('Play video');
        createPow(e.clientX - 40, e.clientY - 20, 'PLAY!');
    });
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.video-card, .social-btn, .btn-comic');

touchElements.forEach(el => {
    el.addEventListener('touchstart', (e) => {
        el.style.transform = 'scale(0.95) rotate(-1deg)';
        const touch = e.touches[0];
        createPow(touch.clientX - 30, touch.clientY - 20, 'TAP!');
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 0 #1a1a1a';
    } else {
        header.style.boxShadow = 'none';
    }
});

header.style.transition = 'box-shadow 0.3s ease';

// ===== Stats Counter =====
const statNums = document.querySelectorAll('.stat-num');

const countUp = (el, target) => {
    const hasK = target.includes('K');
    const hasM = target.includes('M');
    const hasPlus = target.includes('+');
    const num = parseFloat(target.replace(/[KM+]/g, ''));
    const suffix = hasM ? 'M' : hasK ? 'K' : '';

    let current = 0;
    const increment = num / 25;
    const stepTime = 50;

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = Math.floor(num) + suffix + (hasPlus ? '+' : '');
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

// ===== Video Card Click Effects =====
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('click', (e) => {
        createPow(e.clientX - 30, e.clientY - 20);
    });
});

// ===== Social Button Hover =====
const socialBtns = document.querySelectorAll('.social-btn');
const powWords = ['ZAP!', 'WOW!', 'YES!', 'GO!'];

socialBtns.forEach((btn, i) => {
    btn.addEventListener('mouseenter', (e) => {
        createPow(e.clientX - 20, e.clientY - 30, powWords[i]);
    });
});

// ===== Speech Bubble Animation =====
const speechBubble = document.querySelector('.speech-bubble');

if (speechBubble) {
    speechBubble.style.animation = 'bubbleFloat 3s ease-in-out infinite';

    const bubbleStyle = document.createElement('style');
    bubbleStyle.textContent = `
        @keyframes bubbleFloat {
            0%, 100% { transform: translateY(0) rotate(-1deg); }
            50% { transform: translateY(-5px) rotate(1deg); }
        }
    `;
    document.head.appendChild(bubbleStyle);
}

// ===== Action Words Animation =====
const actionWords = document.querySelectorAll('.action-word');

setInterval(() => {
    actionWords.forEach((word, i) => {
        setTimeout(() => {
            word.style.transform = 'scale(1.2) rotate(-8deg)';
            setTimeout(() => {
                word.style.transform = '';
            }, 100);
        }, i * 100);
    });
}, 3000);
