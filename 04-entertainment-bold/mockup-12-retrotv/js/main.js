// ===== Live Timestamp =====
const updateTimestamp = () => {
    const timestamp = document.getElementById('timestamp');
    if (timestamp) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timestamp.textContent = `${hours}:${minutes}:${seconds}`;
    }
};

setInterval(updateTimestamp, 1000);
updateTimestamp();

// ===== Static Noise Intensity =====
const tvStatic = document.querySelector('.tv-static');
let noiseInterval;

const increaseNoise = () => {
    tvStatic.style.opacity = '0.1';
    setTimeout(() => {
        tvStatic.style.opacity = '0.02';
    }, 100);
};

// Random noise bursts
setInterval(() => {
    if (Math.random() > 0.8) {
        increaseNoise();
    }
}, 3000);

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.episode-item, .channel-btn');

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
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.4s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// ===== TV Screen Click =====
const tvScreen = document.querySelector('.tv-screen');
if (tvScreen) {
    tvScreen.addEventListener('click', () => {
        console.log('Play video');
        // Channel change effect
        tvStatic.style.opacity = '0.3';
        setTimeout(() => {
            tvStatic.style.opacity = '0.02';
        }, 200);
    });
}

// ===== Control Buttons =====
const controlBtns = document.querySelectorAll('.control-btn');

controlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        controlBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        increaseNoise();
    });
});

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.episode-item, .channel-btn, .tv-screen');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.98)';
        increaseNoise();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Channel Bar Scroll Effect =====
const channelBar = document.querySelector('.channel-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        channelBar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        channelBar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// ===== Stats Counter (TV Style) =====
const statValues = document.querySelectorAll('.stat-value');

const countUpTV = (el, target) => {
    const num = parseInt(target.replace(/[,+]/g, ''));
    const hasPlus = target.includes('+');

    let current = 0;
    const increment = num / 30;
    const stepTime = 50;

    // Start with "loading" effect
    el.textContent = '---';

    setTimeout(() => {
        const counter = setInterval(() => {
            current += increment;
            if (current >= num) {
                el.textContent = num.toLocaleString() + (hasPlus ? '+' : '');
                clearInterval(counter);
            } else {
                el.textContent = Math.floor(current).toLocaleString();
            }
        }, stepTime);
    }, 500);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            increaseNoise();
            countUpTV(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statValues.forEach(stat => statsObserver.observe(stat));

// ===== Title Typing Effect =====
const titleLines = document.querySelectorAll('.title-line');

titleLines.forEach((line, index) => {
    const text = line.textContent;
    line.textContent = '';
    line.style.visibility = 'visible';

    setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                line.textContent += text[i];
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }, index * 500);
});

// ===== Episode Hover Sound Effect (Visual) =====
const episodeItems = document.querySelectorAll('.episode-item');

episodeItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        increaseNoise();
    });
});

// ===== Channel Switch Animation =====
const channelBtns = document.querySelectorAll('.channel-btn');

channelBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Full screen noise
        tvStatic.style.opacity = '0.5';

        setTimeout(() => {
            tvStatic.style.opacity = '0.02';
            // Navigate after effect
            window.location.href = btn.href;
        }, 300);
    });
});
