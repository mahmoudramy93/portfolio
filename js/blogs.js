const postsBtn = document.getElementById("posts-btn");
const dropdownMenu = document.getElementById("dorpdown-menu");
postsBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});
