document.addEventListener('mousemove', function (e) {
    var navbar = document.querySelector('.navbar');
    if (e.clientY < 50) {
        navbar.classList.remove('navbar-hidden');
    } else {
        navbar.classList.add('navbar-hidden');
    }
});

document.addEventListener('mousemove', function (e) {
    var navbarArrow = document.querySelector('.navbar-arrow');
    var screenHeight = window.innerHeight;

    if (e.clientY < screenHeight / 3) {
        navbarArrow.classList.remove('navbar-arrow-hidden');
    } else {
        navbarArrow.classList.add('navbar-arrow-hidden');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add the 'in-view' class when the element is in the viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Optional: Remove the class if the element goes out of view
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1 // Determines how much of the item must be visible before the transition starts
    });
  
    // Observe all elements with the 'text-entry' class
    document.querySelectorAll('.text-entry').forEach(el => {
      observer.observe(el);
    });
  });  
  