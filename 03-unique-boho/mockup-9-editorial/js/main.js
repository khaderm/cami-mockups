// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.work-feature, .work-item, .contact-link');

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
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// ===== Headline Text Animation =====
const headlines = document.querySelectorAll('.hero-headline .line, .contact-headline span');

headlines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(20px)';
    line.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
    }, 300 + index * 150);
});

// ===== Video Play Buttons =====
document.querySelectorAll('.play-btn, .visual-play, .item-play').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Play video');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = 'none';
    }

    // Hide header on scroll down (mobile)
    if (window.innerWidth < 768) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }

    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.work-feature, .work-item, .contact-link');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.opacity = '0.7';
    });

    el.addEventListener('touchend', () => {
        el.style.opacity = '1';
    });
});

// ===== Parallax on Visual (desktop) =====
const heroVisual = document.querySelector('.visual-frame');

if (window.innerWidth > 768 && heroVisual) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const rate = scrollY * 0.15;
        heroVisual.style.transform = `translateY(${rate}px)`;
    });
}

// ===== Work Items Hover Effect =====
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        workItems.forEach(i => {
            if (i !== item) {
                i.style.opacity = '0.4';
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        workItems.forEach(i => {
            i.style.opacity = '1';
        });
    });
});
