document.querySelectorAll('.slider-nav button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.slider-nav button').forEach(btn => {
        btn.classList.remove('current');
      });
  
      button.classList.add('current');
  
      const slideId = button.getAttribute('data-slide');
      document.getElementById(slideId).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    });
  });
  