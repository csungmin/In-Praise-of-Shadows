// cursor effect
const circle = document.getElementById("circle");
let timeoutId;
  window.addEventListener('mousemove', e => {
      const x = e.clientX - circle.offsetWidth * 2;
      const y = e.clientY - circle.offsetHeight * 2;
  
      const keyframes = {
          transform: `translate(${x}px, ${y}px)`
      };
  
      circle.animate([keyframes], {
          duration: 5000,
          fill:"forwards"
      });
    
  clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      circle.style.opacity = 0;
      }, 2000);
  
  window.addEventListener('mousemove', () => {
      circle.style.opacity = 0.7;
  });
  
  });