import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faList,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

import { categories } from "@data/data.json";

import styles from "./filterCategories.module.scss";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterdPosts } from "@rtk/features/posts/postsSlice";

const { category_item, latest_icon, icon, dropdown_menu, active_list } = styles;

const FilterCategories = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterdPosts("all"));
  }, []);

  return (
    <div className="categories d-flex align-items-center ">
      <div className="position-relative d-flex align-items-center">
        <Link
          to="/blogs"
          className="d-flex align-items-center"
          onClick={() => dispatch(filterdPosts("all"))}
        >
          <span className={`${icon} ${latest_icon}`}>
            <FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon>
          </span>
          <span>Latest</span>
        </Link>
        <Button
          className="d-flex align-items-center posts bg-transparent outline-0 border-0"
          onClick={() => setActive(!active)}
        >
          <span className={icon}>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
          </span>
          <span>Posts</span>
          <span className="ms-2">
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </Button>

        {active ? (
          <ul className={`${dropdown_menu} ${active_list}`} id="dropdown_menu ">
            {categories &&
              categories.map((category) => {
                return (
                  <li key={category.id}>
                    <button
                      className={`${category_item} d-block py-2 fw-bold`}
                      onClick={() => dispatch(filterdPosts(category.category))}
                    >
                      {category.category}
                    </button>
                  </li>
                );
              })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilterCategories;
