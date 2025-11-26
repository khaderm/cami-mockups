// ===== Stage Light Color Shift =====
const lights = document.querySelectorAll('.light');
const colors = ['#ff6b35', '#ff3399', '#00d4ff', '#ffcc00', '#9933ff'];

const shiftLights = () => {
    lights.forEach((light, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        light.style.background = randomColor;
    });
};

setInterval(shiftLights, 4000);

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.set-item, .pass-btn');

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
const titleMain = document.querySelector('.title-main');
const titleSub = document.querySelector('.title-sub');

if (titleMain && titleSub) {
    titleMain.style.opacity = '0';
    titleMain.style.transform = 'translateY(30px)';
    titleMain.style.transition = 'all 0.6s ease';

    titleSub.style.opacity = '0';
    titleSub.style.transform = 'translateY(20px)';
    titleSub.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        titleMain.style.opacity = '1';
        titleMain.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        titleSub.style.opacity = '1';
        titleSub.style.transform = 'translateY(0)';
    }, 400);
}

// ===== Stage Screen Click =====
const stageScreen = document.querySelector('.screen-content');
if (stageScreen) {
    stageScreen.addEventListener('click', () => {
        console.log('Play video');
        // Flash effect
        const glow = document.querySelector('.screen-glow');
        glow.style.opacity = '1';
        glow.style.transform = 'scale(1.3)';
        setTimeout(() => {
            glow.style.opacity = '';
            glow.style.transform = '';
        }, 200);
    });
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.set-item, .pass-btn, .ticket-btn');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
        shiftLights();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.borderBottomColor = 'rgba(255, 107, 53, 0.3)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.9)';
        header.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
});

header.style.transition = 'all 0.3s ease';

// ===== Stats Counter =====
const statNumbers = document.querySelectorAll('.stat-number');

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

statNumbers.forEach(stat => statsObserver.observe(stat));

// ===== Set Item Hover =====
const setItems = document.querySelectorAll('.set-item');

setItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        shiftLights();
    });
});

// ===== Pass Button Hover Effect =====
const passBtns = document.querySelectorAll('.pass-btn');

passBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const icon = btn.querySelector('.pass-icon');
        icon.style.transform = 'scale(1.2)';
    });

    btn.addEventListener('mouseleave', () => {
        const icon = btn.querySelector('.pass-icon');
        icon.style.transform = '';
    });
});

document.querySelectorAll('.pass-icon').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// ===== Poster Frame Glow =====
const posterFrame = document.querySelector('.poster-frame');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (posterFrame && scrollY < window.innerHeight) {
        const intensity = Math.max(0, 1 - scrollY / 500);
        posterFrame.style.boxShadow = `0 0 ${60 * intensity}px rgba(255, 107, 53, ${0.2 * intensity})`;
    }
});

// ===== Wristband Button Pulse =====
const wristbandBtn = document.querySelector('.wristband-btn');

if (wristbandBtn) {
    setInterval(() => {
        wristbandBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            wristbandBtn.style.transform = '';
        }, 200);
    }, 3000);

    wristbandBtn.style.transition = 'all 0.3s ease';
}
