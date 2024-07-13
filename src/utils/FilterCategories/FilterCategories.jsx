import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faList,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

import { categories } from "../../data/data.json";
import { CategoryItem } from "../../components/index";

import "./filterCategories.scss";
import { useState } from "react";
import { Button } from "react-bootstrap";

const FilterCategories = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="categories d-flex align-items-center position-relative">
      <a
        href="#"
        className="d-flex align-items-center latest"
        aria-label="latest blogs"
      >
        <span className="icon">
          <FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon>
        </span>
        <span>Latest</span>
      </a>
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
          {categories.map((category) => {
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
