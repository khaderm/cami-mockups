// ===== Coin Counter =====
let coins = 99;
const coinCount = document.getElementById('coinCount');

const spendCoin = () => {
    if (coins > 0) {
        coins--;
        coinCount.textContent = coins;
        coinCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            coinCount.style.transform = 'scale(1)';
        }, 100);
    }
};

coinCount.style.transition = 'transform 0.1s ease';

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.score-entry, .channel-btn');

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
        el.style.transition = 'all 0.3s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// ===== Title Animation =====
const nameLines = document.querySelectorAll('.name-line');

nameLines.forEach((line, index) => {
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
        }, 80);
    }, index * 500);
});

// ===== Arcade Screen Click =====
const arcadeScreen = document.querySelector('.screen-content');
if (arcadeScreen) {
    arcadeScreen.addEventListener('click', () => {
        console.log('Play video');
        spendCoin();

        // Flash effect
        arcadeScreen.style.background = 'white';
        setTimeout(() => {
            arcadeScreen.style.background = '';
        }, 50);
    });

    arcadeScreen.style.transition = 'background 0.05s ease';
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.score-entry, .channel-btn, .btn-arcade');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
        spendCoin();
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(13, 13, 26, 0.98)';
        header.style.boxShadow = '0 0 20px rgba(153, 69, 255, 0.3)';
    } else {
        header.style.background = 'rgba(13, 13, 26, 0.95)';
        header.style.boxShadow = 'none';
    }
});

header.style.transition = 'all 0.3s ease';

// ===== Score Counter Animation =====
const entryScores = document.querySelectorAll('.entry-score');

const countUpScore = (el, target) => {
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    let current = 0;
    const increment = num / 30;
    const stepTime = 40;

    el.textContent = '0 PTS';

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = num.toLocaleString() + ' PTS';
            clearInterval(counter);
        } else {
            el.textContent = Math.floor(current).toLocaleString() + ' PTS';
        }
    }, stepTime);
};

const scoresObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            countUpScore(entry.target, target);
            scoresObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

entryScores.forEach(score => scoresObserver.observe(score));

// ===== Bar Value Counter =====
const barValues = document.querySelectorAll('.bar-value');

const countUpBar = (el, target) => {
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

const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            countUpBar(entry.target, target);
            barsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

barValues.forEach(val => barsObserver.observe(val));

// ===== Keyboard Sound Effect (Visual) =====
const channelBtns = document.querySelectorAll('.channel-btn');

channelBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const key = btn.querySelector('.btn-key');
        key.style.transform = 'scale(0.9)';
        key.style.background = '#39ff14';
    });

    btn.addEventListener('mouseleave', () => {
        const key = btn.querySelector('.btn-key');
        key.style.transform = '';
        key.style.background = '';
    });
});

document.querySelectorAll('.btn-key').forEach(key => {
    key.style.transition = 'all 0.1s ease';
});

// ===== Score Entry Hover =====
const scoreEntries = document.querySelectorAll('.score-entry');

scoreEntries.forEach(entry => {
    entry.addEventListener('mouseenter', () => {
        const rank = entry.querySelector('.entry-rank');
        rank.style.transform = 'scale(1.2)';
    });

    entry.addEventListener('mouseleave', () => {
        const rank = entry.querySelector('.entry-rank');
        rank.style.transform = '';
    });
});

document.querySelectorAll('.entry-rank').forEach(rank => {
    rank.style.transition = 'transform 0.2s ease';
});

// ===== Random Coin Flash =====
setInterval(() => {
    const coinIcon = document.querySelector('.coin-icon');
    coinIcon.style.color = '#ffffff';
    setTimeout(() => {
        coinIcon.style.color = '';
    }, 100);
}, 5000);

document.querySelector('.coin-icon').style.transition = 'color 0.1s ease';
