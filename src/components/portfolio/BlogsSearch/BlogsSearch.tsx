import { useState } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { searchPosts } from "@rtk/features/posts/postsSlice";

import styles from "./blogsSearch.module.scss";
const { form_control, search_icon } = styles;

const BlogsSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchValue(searchTerm);
    dispatch(searchPosts(searchTerm));
  };

  return (
    <form className="position-relative" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search"
        className={form_control}
        value={searchValue}
        onChange={handleSearchChange}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={search_icon}
      ></FontAwesomeIcon>
    </form>
  );
};

export default BlogsSearch;
