// cursor effect
const circle = document.getElementById("circle");

window.addEventListener('mousemove', e => {
    const x = e.clientX - circle.offsetWidth / 2;
    const y = e.clientY - circle.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    };

    circle.animate([keyframes], {
        duration: 5000,
        fill:"forwards"
    });
});