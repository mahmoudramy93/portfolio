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

// about
function revalHiddenOverflow(p) {
  p.classList.toggle("truncate");
}

// about
function toggleText(element) {
  var p = element.previousElementSibling;
  if (p.classList.contains("truncate")) {
    p.classList.remove("truncate");
    p.classList.add("expanded");
    element.textContent = "Read less";
  } else {
    p.classList.remove("expanded");
    p.classList.add("truncate");
    element.textContent = "Read more";
  }
}

// skills
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    arrows: false,
    pagination: false,
    focus: "center",
    gap: "1em",
    // autoplay: true,
    interval: 3000,
  }).mount();
});

// navigation
const navLinks = document.querySelectorAll(".navigation .nav-link");
$(navLinks).on("click", function () {
  $(navLinks).removeClass("active");
  $(this).addClass("active");
});
