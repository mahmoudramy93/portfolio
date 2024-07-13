import { FilterCategories, Search } from "../../utils/index";

import "./blogsFilter.scss";

const BlogsFilter = () => {
  return (
    <div className="filter">
      <div className="row">
        <div className="col-8 d-flex">
          <FilterCategories />
        </div>
        <div className="col-4">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default BlogsFilter;
