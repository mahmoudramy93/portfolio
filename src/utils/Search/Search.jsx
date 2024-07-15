import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";

import "./search.scss";
import { searchPosts } from "../../rtk/features/posts/postsSlice";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchValue(searchTerm);
    dispatch(searchPosts(searchTerm));
  };

  return (
    <div className="search">
      <form className="position-relative" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
        ></FontAwesomeIcon>
      </form>
    </div>
  );
};

export default Search;
