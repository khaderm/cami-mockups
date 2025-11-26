// Custom cursor glow
const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Expand cursor on interactive elements
const interactives = document.querySelectorAll('a, button');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '400px';
        cursor.style.height = '400px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '300px';
        cursor.style.height = '300px';
    });
});

// CTA click
const cta = document.querySelector('.cta-igloo');
if (cta) {
    cta.addEventListener('click', () => console.log('Enter World - Play video'));
}

// Parallax on title
const title = document.querySelector('.title-igloo');
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    title.style.transform = `translate(${x}px, ${y}px)`;
});

// Touch device - add slight tilt on device orientation
if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    window.addEventListener('deviceorientation', (e) => {
        const x = (e.gamma / 45) * 10; // Left/right tilt
        const y = (e.beta / 45) * 10;  // Front/back tilt
        title.style.transform = `translate(${x}px, ${y}px)`;
    });
}
