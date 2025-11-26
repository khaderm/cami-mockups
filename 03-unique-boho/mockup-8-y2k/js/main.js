// ===== Star Parallax =====
const stars = document.querySelectorAll('.star');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        stars.forEach((star, i) => {
            const speed = (i + 1) * 0.01;
            const x = (clientX - centerX) * speed;
            const y = (clientY - centerY) * speed;
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ===== Scroll Animations =====
const animateOnScroll = () => {
    const cards = document.querySelectorAll('.work-card, .btn-chrome');

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

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
};

animateOnScroll();

// ===== Video Bubble Click =====
const videoBubble = document.querySelector('.video-bubble');
if (videoBubble) {
    videoBubble.addEventListener('click', () => {
        console.log('Play video');
        // Add pulse animation
        videoBubble.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            videoBubble.style.animation = '';
        }, 300);
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

// ===== Header Background on Scroll =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 26, 46, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
    }
});

header.style.transition = 'all 0.3s ease';

// ===== Work Cards Touch Scroll Enhancement =====
const workScroll = document.querySelector('.work-scroll');

if (workScroll) {
    let isDown = false;
    let startX;
    let scrollLeft;

    workScroll.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - workScroll.offsetLeft;
        scrollLeft = workScroll.scrollLeft;
    });

    workScroll.addEventListener('mouseleave', () => {
        isDown = false;
    });

    workScroll.addEventListener('mouseup', () => {
        isDown = false;
    });

    workScroll.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - workScroll.offsetLeft;
        const walk = (x - startX) * 2;
        workScroll.scrollLeft = scrollLeft - walk;
    });
}

// ===== Touch Feedback =====
const touchElements = document.querySelectorAll('.work-card, .btn-chrome, .video-bubble');

touchElements.forEach(el => {
    el.addEventListener('touchstart', () => {
        el.style.transform = 'scale(0.95)';
    });

    el.addEventListener('touchend', () => {
        el.style.transform = '';
    });
});

// ===== Random Star Movement =====
setInterval(() => {
    stars.forEach(star => {
        const randomX = (Math.random() - 0.5) * 10;
        const randomY = (Math.random() - 0.5) * 10;
        star.style.marginLeft = randomX + 'px';
        star.style.marginTop = randomY + 'px';
    });
}, 2000);
