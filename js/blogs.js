const postsBtn = document.getElementById("posts-btn");
const dropdownMenu = document.getElementById("dorpdown-menu");
postsBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

const blogsContent = document.querySelector(".content");
const api = "./data/data.json";

async function fetchData() {
  try {
    const res = await fetch(`${api}`);
    if (!res.ok) {
      console.error("faild to fetch data", res.status);
      return;
    }
    const data = await res.json();
    const posts = data.posts;
    displayPosts(posts);
  } catch (error) {
    console.error("faild to fetch data", error.message);
  }
}

function displayPosts(posts) {
  const row = document.createElement("div");
  row.classList.add("row");

  posts.forEach((post) => {
    row.innerHTML += `
                <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="blog" onclick='redirectToSingleBlog(${post.id})'>
                <div class="blog-header">
                  <span class="blog-techno">${post.technology}</span>
                </div>
                <div class="blog-body">
                  <h3 class="blog-title">
                  ${post.title}
                  </h3>
                  <p class="blog-description">
                  ${post.description}                  
                  </p>
                </div>
                <div
                  class="blog-footer d-flex align-items-center justify-content-between"
                >
                  <a href="!#" class="more-about-me"
                    >Learn More
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                  <a href="!#" class="read-time">
                    <span>${post.time}</span><span> min read</span>
                  </a>
                </div>
              </div>
            </div>
            `;
  });
  blogsContent.appendChild(row);
}

function redirectToSingleBlog(blogId) {
  window.location.href = `blog.html?blogId=${blogId}`;
}

fetchData();
