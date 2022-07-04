import React from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const HeaderActionsBar = ({ filterState, setFilterState, searchValue, setSearchValue }) => {
    return(
        <div className="todo-header__bottom-section">
            <SearchBar
                searchValue={ searchValue }
                setSearchValue={ setSearchValue }
            />
            <FilterBar
                filterState={ filterState }
                setFilterState={ setFilterState }
            />
        </div>
    )
}

export default HeaderActionsBar;