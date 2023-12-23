document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    autoplay: {
      delay: 1500, // Delay between slides in milliseconds (5 seconds)
      disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the slider
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    nextButton: '#js-prev1',
   prevButton: '#js-next1',
  });
});