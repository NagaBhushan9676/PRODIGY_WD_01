// JavaScript for adding interactivity to the navigation menu

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#main-nav ul li a');
  
    // Function to highlight active section in the navigation menu
    function highlightNavLink() {
      let index = sections.length;
  
      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  
    // Function to change navigation menu style on scroll
    function changeNavStyleOnScroll() {
      if(window.scrollY >= 50) {
        document.getElementById('main-nav').style.backgroundColor = '#555';
      } else {
        document.getElementById('main-nav').style.backgroundColor = '#333';
      }
    }
  
    // Event listeners
    window.addEventListener('scroll', function() {
      changeNavStyleOnScroll();
      highlightNavLink();
    });
  
    // Highlight nav link when clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjusted scroll position to account for fixed header
          behavior: 'smooth'
        });
      });
    });
  
    // Initial call to highlight the active section and style the nav on page load
    highlightNavLink();
    changeNavStyleOnScroll();
  });
  