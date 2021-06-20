import { useState } from "react"
function SearchBar({updateHogList, updateSortBy}) {
  
    const handleChange = () => {
        updateHogList()
    } 

    const handleNameClick = (e) => {
        updateSortBy(e.target.name)
    }
    const handleWeightClick = (e) => {
        updateSortBy(e.target.name)
    }

    return (
        <div>
            <label><input type="checkbox" onChange={handleChange}/>Only show greased hogs</label>
            <br />
            <button className="ui button" onClick={handleNameClick} name="name">Sort by name</button>
            <button className="ui button" onClick={handleWeightClick} name="weight">Sort by weight</button>
            <br />

        </div>

    )
}
export default SearchBar;