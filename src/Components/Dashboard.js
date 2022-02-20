import React, { useState } from "react";
import { CardContainer } from "./CardContainer";

export const Dashboard = () => {
  const [searchBar, setSearchBar] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchBar(lowerCase);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="projectSearch"
          aria-label="Search and filter creative projects"
          placeholder="Search creative projects"
          onChange={inputHandler}
        />
      </div>
      <div>
        <CardContainer input={searchBar} />
      </div>
    </div>
  );
};
