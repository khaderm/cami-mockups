// ===== Scroll Animation Observer =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with data-scroll attribute
document.querySelectorAll('[data-scroll]').forEach(el => {
    scrollObserver.observe(el);
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Video Slider =====
const slides = document.querySelectorAll('.video-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;

function updateSlider(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

prevBtn?.addEventListener('click', () => {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateSlider(currentSlide);
});

nextBtn?.addEventListener('click', () => {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateSlider(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider(currentSlide);
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Parallax Effect on Scroll =====
const heroVideo = document.querySelector('.hero-video-wrapper');
const heroText = document.querySelector('.hero-text');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;

    if (heroVideo && scrolled < window.innerHeight) {
        heroVideo.style.transform = `translateY(${rate * 0.5}px)`;
    }

    if (heroText && scrolled < window.innerHeight) {
        heroText.style.transform = `translateY(${rate * 0.2}px)`;
        heroText.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===== Service Cards Stagger Animation =====
const serviceCards = document.querySelectorAll('.service-card');

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    staggerObserver.observe(card);
});

// ===== Stats Counter Animation =====
const stats = document.querySelectorAll('.stat-number');

const countUp = (el, target) => {
    const isK = target.includes('K');
    const isPlus = target.includes('+');
    const num = parseInt(target.replace(/[K+]/g, ''));
    const suffix = (isK ? 'K' : '') + (isPlus ? '+' : '');

    let current = 0;
    const increment = num / 50;
    const duration = 1500;
    const stepTime = duration / 50;

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = num + suffix;
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

stats.forEach(stat => {
    statsObserver.observe(stat);
});

// ===== Video Play Interaction (Placeholder) =====
document.querySelectorAll('.play-icon, .play-icon-large').forEach(btn => {
    btn.addEventListener('click', () => {
        // Placeholder for video playback
        console.log('Video play triggered');
        // In production, this would open a modal or start video playback
    });
});
