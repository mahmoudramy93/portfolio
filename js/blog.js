const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get("blogId");
console.log(blogId);

const api = "./data/data.json";
const singleBlogContainer = document.querySelector(
  ".single-blog .post-content"
);

async function fetchBlogData() {
  try {
    const res = await fetch(`${api}`);
    if (!res.ok) {
      console.error("faild to fetch data", res.status);
      return;
    }
    const data = await res.json();
    const posts = data.posts;
    const post = posts.find((post) => post.id == blogId);

    displayPostDetails(post);
  } catch (error) {
    console.error("faild to fetch data", error.message);
  }
}
function displayPostDetails(post) {
  console.log(post);
  let row = document.createElement("div");
  row.classList.add("row");

  const subTitlesHtml = post.sub_titles
  .map(
    (subTitle) => `
<h4 class="sub-title">${subTitle.title}</h4>
<p class="description">${subTitle.description}</p>
`
  )
  .join("");


  const referencesHtml = post.refrences
    .map(
      (reference) => `
      <li class="references-item position-relative d-flex align-items-center">
        <a class="references-link" href="#">${reference}</a>
      </li>
    `
    )
    .join("");

  row.innerHTML = `
      <div class="col-8">
        <div class="blog">
          <div class="blog-header">
            <img
              src="${post.image}"
              alt="${post.technology}"
              class="img-fluid"
              loading="lazy"
            />
            <div class="technologies">
              <span class="blog-techno">${post.technology}</span>
            </div>
            <h3 class="blog-title position-relative">${post.title}</h3>
          </div>
          <div class="blog-body">
            ${subTitlesHtml}
          </div>
          <div class="blog-footer">
            <h5 class="references-title">References:</h5>
            <ul class="references-list">
              ${referencesHtml}
            </ul>
          </div>
        </div>
      </div>
    `;

  singleBlogContainer.appendChild(row);
}

fetchBlogData();
