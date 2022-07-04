import React from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderActionsBar from "./HeaderActionsBar/HeaderActionsBar";

const Header = ({ listData, filterState, setFilterState, searchValue, setSearchValue }) => {
    return(
        <div className="todo-header">
            <HeaderInfo listData={ listData } />
            <HeaderActionsBar
                filterState={ filterState }
                setFilterState={ setFilterState }
                searchValue={ searchValue }
                setSearchValue={ setSearchValue }
            />
        </div>
    )
}

export default Header;