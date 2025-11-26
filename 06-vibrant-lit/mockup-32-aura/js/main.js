const cta = document.querySelector('.cta');
if (cta) {
    cta.addEventListener('click', () => console.log('Play video'));
}

// Aura follows cursor slightly
document.addEventListener('mousemove', (e) => {
    const aura = document.querySelector('.aura');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    aura.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});
