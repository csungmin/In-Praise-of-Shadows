
 // I found this code for "Redirect to the next page" from Chat GPT
//  click anywhere to go to next
 document.addEventListener('click', function() {
  fadeInImage.style.opacity = 1; 

  setTimeout(function() {
    window.location.href = "https://csungmin.github.io/In-Praise-of-Shadows/p1/index.html";
}, 6000);  

});



// cursor effect --> reference from youtube
const circle = document.getElementById("circle");
let timeoutId;
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
    
  clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      circle.style.opacity = 0;
      }, 2000);
  
  window.addEventListener('mousemove', () => {
      circle.style.opacity = 1;
  });
  
  });