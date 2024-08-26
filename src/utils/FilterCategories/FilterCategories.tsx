import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faList,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

import { categories } from "../../data/data.json";

import "./filterCategories.module.scss";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CategoryItem from "@components/portfolio/CategoryItem/CategoryItem";
import { filterdPosts } from "@rtk/features/posts/postsSlice";

const FilterCategories = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterdPosts("all"));
  }, []);

  return (
    <div className="categories d-flex align-items-center position-relative">
      <Link
        to="/blogs"
        className="d-flex align-items-center latest"
        onClick={() => dispatch(filterdPosts("all"))}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon>
        </span>
        <span>Latest</span>
      </Link>
      <Button
        className="d-flex align-items-center posts bg-transparent outline-0 border-0"
        onClick={() => setActive(!active)}
      >
        <span className="icon post-icon">
          <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
        </span>
        <span>Posts</span>
        <span className="arrow-down">
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </span>
      </Button>
      {active ? (
        <ul className="dorpdown-menu active" id="dorpdown-menu">
          {categories &&
            categories.map((category) => {
              return (
                <li key={category.id}>
                  <CategoryItem category={category} />
                </li>
              );
            })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterCategories;
