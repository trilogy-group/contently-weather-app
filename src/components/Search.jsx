import React, { useState } from "react";

const Search = ({ searchButtonOnClick }) => {
  const [searchValue, setSearchValue] = useState("Miami");

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="ui action input">
      <input
        type="text"
        placeholder="Get the weather for..."
        value={searchValue}
        onChange={onInputChange}
      />
      <button
        className="ui button"
        onClick={() => searchButtonOnClick(searchValue)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
