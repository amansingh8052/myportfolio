// Typed.js Initialization
const typed = new Typed('.multiple-text', {
  strings: ['UI/UX Designer', 'Frontend Developer', 'Graphic Designer'],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1000,
  loop: true
});

// Navigation and Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-links');

  // Function to update active link
  function updateActiveLink() {
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 20;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && 
          window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    this.innerHTML = mobileMenu.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Get the target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  // Set active link on scroll
  window.addEventListener('scroll', updateActiveLink);
  
  // Initialize active link on page load
  updateActiveLink();
});
      // Portfolio Filter
      const filterBtns = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          // Update active button
          filterBtns.forEach(btn => btn.classList.remove('active'));
          btn.classList.add('active');
          
          const filter = btn.dataset.filter;
          
          // Filter items
          portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });

      // Animation on scroll
      const fadeElements = document.querySelectorAll('.fade-in');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, {
        threshold: 0.1
      });
      
      fadeElements.forEach(el => {
        observer.observe(el);
      });