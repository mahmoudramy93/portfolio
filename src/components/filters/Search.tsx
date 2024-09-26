import React from "react";

type TSearchProps = {
    searchQuery:string,
  setSearchQuery: (query: string) => void;
};

const Search = ({ searchQuery,setSearchQuery }: TSearchProps) => {
  return (
    <form
      className="relative flex w-full border border-gray-600"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Enter Keyword..."
        className="p-4 w-5/6 outline-none bg-darkColor text-white"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input
        type="submit"
        value="Search"
        className="p-2 bg-gray-800 dark:bg-tealGreen text-white dark:text-black cursor-pointer w-4/12 font-semibold"
      />
    </form>
  );
};

export default Search;
