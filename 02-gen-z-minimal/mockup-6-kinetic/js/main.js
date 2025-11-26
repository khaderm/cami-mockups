// ===== Custom Cursor =====
const cursor = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top = e.clientY - 4 + 'px';
});

// Cursor hover states
const hoverElements = document.querySelectorAll('a, button, .video-container, .item-thumb');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ===== Scroll Animations =====
const scrollElements = document.querySelectorAll('[data-scroll]');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px'
});

scrollElements.forEach(el => scrollObserver.observe(el));

// ===== Kinetic Typography - Title Parallax =====
const titleLines = document.querySelectorAll('.title-line');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    titleLines.forEach(line => {
        const speed = parseFloat(line.dataset.speed) || 1;
        const yOffset = scrollY * speed * -0.3;
        line.style.transform = `translateX(${yOffset}px)`;
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

// ===== Work Items Stagger =====
const workItems = document.querySelectorAll('.work-item');

const workObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

workItems.forEach(item => workObserver.observe(item));

// ===== Contact Links Stagger =====
const contactLinks = document.querySelectorAll('.contact-link');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

contactLinks.forEach(link => contactObserver.observe(link));

// ===== Video Hover Effect =====
const videoContainer = document.querySelector('.video-container');

if (videoContainer) {
    videoContainer.addEventListener('mousemove', (e) => {
        const rect = videoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        videoContainer.querySelector('.video-inner').style.transform =
            `translate(${-8 + x * 0.05}px, ${-8 + y * 0.05}px)`;
    });

    videoContainer.addEventListener('mouseleave', () => {
        videoContainer.querySelector('.video-inner').style.transform = 'translate(-8px, -8px)';
    });
}

// ===== Nav Color Change on Scroll =====
const workSection = document.querySelector('.work');

window.addEventListener('scroll', () => {
    const workTop = workSection.offsetTop;
    const workBottom = workTop + workSection.offsetHeight;
    const scrollY = window.scrollY + 50;

    if (scrollY >= workTop && scrollY < workBottom) {
        document.body.style.setProperty('--nav-color', 'var(--black)');
    } else {
        document.body.style.setProperty('--nav-color', 'var(--white)');
    }
});

// ===== Text Split Animation on Scroll =====
const animateTextOnScroll = () => {
    const contactTitle = document.querySelector('.contact-title');

    if (contactTitle) {
        const words = contactTitle.querySelectorAll('.contact-word');

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    words.forEach((word, index) => {
                        setTimeout(() => {
                            word.classList.add('visible');
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.3 });

        titleObserver.observe(contactTitle);
    }
};

animateTextOnScroll();

// ===== Work Items Hover Effect =====
workItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        workItems.forEach(i => {
            if (i !== item) {
                i.style.opacity = '0.3';
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        workItems.forEach(i => {
            i.style.opacity = '1';
        });
    });
});

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Intersection Observer for Work Title =====
const workTitle = document.querySelector('.work-title');
const workWords = workTitle?.querySelectorAll('.work-word');

if (workWords) {
    const workTitleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                workWords.forEach((word, index) => {
                    setTimeout(() => {
                        word.classList.add('visible');
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.3 });

    workTitleObserver.observe(workTitle);
}
