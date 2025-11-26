// ===== Preloader =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2500);
});

// ===== Scroll Animation Observer =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-scroll]').forEach(el => {
    scrollObserver.observe(el);
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Parallax Effect on Hero =====
const heroGradient = document.querySelector('.hero-gradient');
const heroPattern = document.querySelector('.hero-pattern');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    if (heroGradient && scrolled < window.innerHeight) {
        heroGradient.style.transform = `translate(${scrolled * 0.05}px, ${scrolled * 0.1}px)`;
    }

    if (heroPattern && scrolled < window.innerHeight) {
        heroPattern.style.opacity = 0.5 - (scrolled / window.innerHeight) * 0.3;
    }
});

// ===== Stats Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');

const countUp = (el, target) => {
    const hasK = target.includes('K');
    const hasM = target.includes('M');
    const hasPlus = target.includes('+');

    let num = parseFloat(target.replace(/[KM+]/g, ''));
    const suffix = (hasM ? 'M' : hasK ? 'K' : '') + (hasPlus ? '+' : '');

    let current = 0;
    const increment = num / 50;
    const duration = 1500;
    const stepTime = duration / 50;

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

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===== Expertise Cards Hover Effect =====
const expertiseCards = document.querySelectorAll('.expertise-card');

expertiseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        expertiseCards.forEach(c => {
            if (c !== card) {
                c.style.opacity = '0.5';
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        expertiseCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ===== Portfolio Items Stagger Animation =====
const portfolioItems = document.querySelectorAll('.portfolio-item');

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

portfolioItems.forEach(item => {
    portfolioObserver.observe(item);
});

// ===== Video Play Button Interaction =====
document.querySelectorAll('.play-button-luxury, .play-circle-luxury').forEach(btn => {
    btn.addEventListener('click', () => {
        // Placeholder for video modal
        console.log('Video play triggered');
    });
});

// ===== Connect Cards Hover Effect =====
const connectCards = document.querySelectorAll('.connect-card');

connectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        connectCards.forEach(c => {
            if (c !== card) {
                c.style.opacity = '0.6';
            }
        });
    });

    card.addEventListener('mouseleave', () => {
        connectCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// ===== Text Reveal Animation =====
const revealText = (element, delay = 0) => {
    const text = element.textContent;
    element.textContent = '';
    element.style.visibility = 'visible';

    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.display = 'inline-block';
        span.style.transition = `all 0.3s ease ${delay + i * 0.02}s`;
        element.appendChild(span);

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, 100);
    });
};

// ===== Magnetic Hover Effect for Buttons =====
const magneticElements = document.querySelectorAll('.btn-luxury, .play-button-luxury');

magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
    });
});

// ===== Smooth Scroll Progress Indicator =====
const createScrollProgress = () => {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progress);

    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: transparent;
            z-index: 9999;
        }
        .scroll-progress-bar {
            height: 100%;
            background: var(--color-gold);
            width: 0;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.querySelector('.scroll-progress-bar').style.width = scrollPercent + '%';
    });
};

createScrollProgress();

// ===== Image Reveal Animation =====
const imageContainers = document.querySelectorAll('.visual-frame, .video-frame-luxury, .item-media');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.clipPath = 'inset(0 0 0 0)';
            imageObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

imageContainers.forEach(container => {
    container.style.clipPath = 'inset(0 100% 0 0)';
    container.style.transition = 'clip-path 1s cubic-bezier(0.4, 0, 0.2, 1)';
    imageObserver.observe(container);
});

// ===== Footer Year Update =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}
