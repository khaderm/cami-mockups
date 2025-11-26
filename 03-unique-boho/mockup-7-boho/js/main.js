// ===== Organic Shape Parallax (desktop only) =====
const shapes = document.querySelectorAll('.shape');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        shapes.forEach((shape, i) => {
            const speed = (i + 1) * 0.015;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.work-item, .link-btn');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
};

animateOnScroll();

// ===== Video Blob Click =====
const videoBlob = document.querySelector('.video-blob');
if (videoBlob) {
    videoBlob.addEventListener('click', () => {
        console.log('Play video');
    });
}

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

// ===== Header Hide on Scroll (mobile) =====
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (window.innerWidth < 768) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }

    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s ease';

// ===== Touch-friendly interactions =====
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
    item.addEventListener('touchstart', () => {
        item.style.transform = 'scale(0.98)';
    });

    item.addEventListener('touchend', () => {
        item.style.transform = 'scale(1)';
    });
});
