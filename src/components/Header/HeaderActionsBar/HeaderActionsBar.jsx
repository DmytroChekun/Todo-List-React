import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const HeaderActionsBar = () => {
    return(
        <div className="todo-header__bottom-section">
            <SearchBar />
            <FilterBar />
        </div>
    )
}

export default HeaderActionsBar;