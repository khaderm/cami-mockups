// ===== Custom Cursor =====
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 15 + 'px';
        cursorFollower.style.top = e.clientY - 15 + 'px';
    }, 100);
});

// Cursor hover effects
document.querySelectorAll('a, button, .video-thumb, .play-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.opacity = '0.5';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.opacity = '1';
    });
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

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Service Accordion =====
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    const header = item.querySelector('.service-header');

    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        serviceItems.forEach(i => i.classList.remove('active'));

        // Toggle clicked item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Open first service by default
if (serviceItems.length > 0) {
    serviceItems[0].classList.add('active');
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Parallax Background Text =====
const bgText = document.querySelector('.hero-bg-text');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (bgText && scrolled < window.innerHeight) {
        bgText.style.transform = `translate(-50%, -50%) translateX(${scrolled * 0.2}px)`;
    }
});

// ===== Title Animation =====
const titleLines = document.querySelectorAll('.title-line');

titleLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(50px)';

    setTimeout(() => {
        line.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
    }, 300 + (index * 150));
});

// ===== Video Hover Effects =====
const videoThumbs = document.querySelectorAll('.video-thumb');

videoThumbs.forEach(thumb => {
    thumb.addEventListener('mouseenter', () => {
        thumb.style.transform = 'scale(1.02)';
    });

    thumb.addEventListener('mouseleave', () => {
        thumb.style.transform = 'scale(1)';
    });
});

// ===== Stats Counter Animation =====
const statValues = document.querySelectorAll('.stat-value, .stat-num');

const countUp = (el, target) => {
    const hasK = target.includes('K');
    const hasM = target.includes('M');
    const hasPlus = target.includes('+');

    let num = parseFloat(target.replace(/[KM+]/g, ''));
    const suffix = (hasM ? 'M' : hasK ? 'K' : '') + (hasPlus ? '+' : '');
    const isDecimal = target.includes('.');

    let current = 0;
    const increment = num / 40;
    const duration = 1200;
    const stepTime = duration / 40;

    const counter = setInterval(() => {
        current += increment;
        if (current >= num) {
            el.textContent = (isDecimal ? num.toFixed(1) : Math.floor(num)) + suffix;
            clearInterval(counter);
        } else {
            el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
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

statValues.forEach(stat => {
    statsObserver.observe(stat);
});

// ===== Tilt Effect for Video Cards =====
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===== Marquee Pause on Hover =====
const marquee = document.querySelector('.marquee-content');

if (marquee) {
    const marqueeParent = marquee.parentElement;

    marqueeParent.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marqueeParent.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
}

// ===== Magnetic Button Effect =====
const magneticBtns = document.querySelectorAll('.btn-primary, .nav-cta');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ===== Contact Links Hover Effect =====
const contactLinks = document.querySelectorAll('.contact-link');

contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        contactLinks.forEach(l => {
            if (l !== link) {
                l.style.opacity = '0.5';
            }
        });
    });

    link.addEventListener('mouseleave', () => {
        contactLinks.forEach(l => {
            l.style.opacity = '1';
        });
    });
});
