import React from "react";
import ListItemDates from "./ListItemDates";
import ListItemActionButtons from "./ListItemActionButtons";
import classNames from "classnames";

const ListItem = ({ taskItem }) => {

    const { createDate, finishDate, done, important, text, id } = taskItem;

    const listItemClasses = classNames(
        'todo-list__item', {'done': done, 'important': important }
        );

    return (

        <li className={ listItemClasses }>
            <div className="todo-list__item-content">
                <span className="todo-list__item-label"> { text } </span>
                <ListItemDates createDate={ createDate } finishDate={ finishDate } />
                <ListItemActionButtons done={ done } important={ important } />
            </div>
        </li>
    )
}

export default ListItem;
