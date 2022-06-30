import React from "react";
import HeaderInfo from "./HeaderInfo";
import HeaderActionsBar from "./HeaderActionsBar/HeaderActionsBar";

const Header = ({ listData }) => {
    return(
        <div className="todo-header">
            <HeaderInfo listData={ listData } />
            <HeaderActionsBar />
        </div>
    )
}

export default Header;