// loader
// $(window).on("load", function () {
//   $(".loader").fadeOut(4000);
// });

// setTimeout(function () {
//   $(".loader").fadeOut(3000);
// }, 1000);

// auto typing
const exampleText = ["Hello, World! 👋"];
const exampleTyping = new AutoTyping(".auto-type", exampleText, {
  typeSpeed: 80,
  deleteSpeed: 50,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start();

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  speed: 800,
  autoplay: {
    delay: 5000,
  },
});

// skills
// document.addEventListener("DOMContentLoaded", function () {
//   new Splide(".splide", {
//     type: "loop",
//     perPage: 2,
//     arrows: false,
//     pagination: false,
//     focus: "center",
//     gap: "1em",
//     arrows: true,
//     autoplay: true,
//     interval: 3000,
//   }).mount();
// });

// navigation
const navLinks = document.querySelectorAll(".navigation .nav-link");
$(navLinks).on("click", function () {
  $(navLinks).removeClass("active");
  $(this).addClass("active");
});
