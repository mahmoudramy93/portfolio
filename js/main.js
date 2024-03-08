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

// skills
$(function () {
  $(".chart").easyPieChart({
    size: 100,
    barColor: "#00c896",
    trackColor: "#2B2B2B",
    scaleLength: 0,
    lineWidth: 5,
    lineCap: "circle",
    animate: 2000,
  });
});
