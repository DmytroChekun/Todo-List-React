import React from "react";
import addIco from '../../../img/add-ico.svg';
import doneIco from '../../../img/done-ico.svg';

const ListItemDates = ({ createDate, finishDate }) => {
    return (
        <span className="todo-list__dates">
            <span className="todo-list__create-date">
                <img src={ addIco } alt="add" />
                { createDate }
            </span>
            <span className="todo-list__finish-date">
                <img src={ doneIco } alt="done" />
                { finishDate }
            </span>
        </span>
    )
}

export default ListItemDates;
