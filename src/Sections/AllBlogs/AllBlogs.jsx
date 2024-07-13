import { CustomTitle } from "../../components/index";

const Search = () => {
  return (
    <div className="search">
      <form className="position-relative">
        <input type="text" placeholder="Search" className="form-control" />
        <i className="fa-solid fa-magnifying-glass search-icon" />
      </form>
    </div>
  );
};

const AllBlogs = () => {
  return (
    <div className="blogs position-relative">
      <div className="container">
        <CustomTitle title={"Blogs"} description={"This is my blogs"} />
        <div className="filter">
          <div className="row">
            <div className="col-8 d-flex">
              <div className="categories d-flex align-items-center position-relative">
                <a
                  href="#"
                  aria-label="latest blogs"
                  className="d-flex align-items-center latest"
                >
                  <span className="icon">
                    <i className="fa-solid fa-terminal" />
                  </span>
                  <span>Latest</span>
                </a>
                <a
                  href="#"
                  aria-label="categories"
                  className="d-flex align-items-center posts"
                  id="posts-btn"
                >
                  <span className="icon post-icon">
                    <i className="fa-solid fa-list" />
                  </span>
                  <span>Posts</span>
                  <span className="arrow-down">
                    <i className="fa-solid fa-caret-down" />
                  </span>
                </a>
                <ul className="dorpdown-menu" id="dorpdown-menu">
                  <li>
                    <a
                      href="#"
                      className="category d-block py-2 fw-bold"
                      aria-label="Python"
                    >
                      Python
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category d-block py-2 fw-bold"
                      aria-label="JavaScript"
                    >
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="category d-block py-2 fw-bold"
                      aria-label="Sql"
                    >
                      Sql
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <Search />
            </div>
          </div>
        </div>
        <div className="content" />
      </div>
    </div>
  );
};

export default AllBlogs;
