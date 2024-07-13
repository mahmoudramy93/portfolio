import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './search.scss';

const Search = () => {
  return (
    <div className="search">
    <form className="position-relative">
      <input type="text" placeholder="Search" className="form-control" />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="search-icon"
      ></FontAwesomeIcon>
    </form>
  </div>
  )
}

export default Search