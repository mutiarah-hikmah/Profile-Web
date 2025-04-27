document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
  
      // Menambahkan animasi untuk CV Section
      const items = document.querySelectorAll('.experience-item, .education-item');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2 // Trigger saat 20% elemen kelihatan
      });
  
      items.forEach(item => {
        observer.observe(item);
        item.style.animationPlayState = 'paused'; // Biar nunggu di-scroll dulu
      });
    });
  });
  