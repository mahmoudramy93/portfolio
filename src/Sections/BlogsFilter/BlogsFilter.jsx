import { CustomTitle } from "../../components/index";
import { FilterCategories, Search } from "../../utils/index";

import "./blogsFilter.scss";

const AllBlogs = () => {
  return (
    <div className="blogs-filter position-relative">
      <div className="container">
        <CustomTitle
          title={"All Blogs"}
          description={"There is all my blogs"}
        />
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
      </div>
    </div>
  );
};

export default AllBlogs;
