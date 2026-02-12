new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 0,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    dynamicMainBullets: 0,
  },

 
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }

});

const fadeInElements = document.querySelectorAll('.gtku, .cleiton2, .blackrestoright, .blackrestoleft, .footercontent');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.5
});

fadeInElements.forEach((element) => {
  observer.observe(element);
});


