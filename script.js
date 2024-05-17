let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', ()=>{
  console.log('clicked');
   const visibility = primaryNav.getAttribute('data-visible');
   
   if(visibility === "false"){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
   } else {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
   }
});

// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
