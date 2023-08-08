import "./searchBarStyle.css";
import React, { FC, useState } from "react";
// import the array of objects in database

const [searchInput, setSearchInput] = useState("");

const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
  // ...
  // filter the array of all objects in database here!!!
  // e.g., propertyArr.filter((property) => {
  //  return property.attributeToFilterFrom.match(searchInput);
  //})
  // ...
}

const searchBar: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={inputHandler}
        value={searchInput}
      ></input>
      <table>
        <tr></tr>
      </table>
    </div>
  );
};

export default searchBar;
