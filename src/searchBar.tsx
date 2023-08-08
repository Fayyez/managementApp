import "./searchBarStyle.css";
import React, { useState } from "react";
// import the array of objects in database

const [searchInput, setSearchInput] = useState("");

const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
  // ...
  //
  // filter the array of all objects in database here!!!
  // e.g., propertyArr.filter((property) => {
  //  return property.attributeToFilterFrom.match(searchInput);
  //  })
  // ...
}

interface Props<T> {
    propertyArr:T[]
}

const searchBar = <T extends object>({propertyArr}: Props<T>) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="search..."
        onChange={inputHandler}
        value={searchInput}
      ></input>
      <div className="searchResults">
        {propertyArr.map(property => {
            return (
                <div className="cursor-pointer"></div>
            )
        })}
      </div>
    </div>
  );
};

export default searchBar;
