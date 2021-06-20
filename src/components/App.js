import React, { useState } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar"
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs)
  const [greasedFilter, setGreasedFilter] = useState(false)
  const [sortBy, setSortBy] = useState("")


  const updateHogList = () => {
    setGreasedFilter(!greasedFilter)
  }

  const updateSortBy = (searchTerm) => {
    setSortBy(searchTerm)
  }


  const updatedHogs = hogList
    .filter((hog) => (greasedFilter ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog2.weight - hog1.weight
      }
      else {
        return hog1.name.localeCompare(hog2.name)
      }
    })

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <SearchBar updateSortBy={updateSortBy} updateHogList={updateHogList} />
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={updatedHogs} />
      </div>
    </div>
  );
}

export default App;

