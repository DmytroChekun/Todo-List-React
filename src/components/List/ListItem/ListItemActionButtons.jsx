import React from "react";
import removeIco from "../../../img/trash-can.svg";

const ListItemActionButtons = () => {
    return (
        <span className="todo-list__item-btns">
            <button className="todo-list__item-btn delete">
                <img src={ removeIco } alt="" />
            </button>
            <button className="todo-list__item-btn important">!</button>
        </span>
    )
}

export default ListItemActionButtons;