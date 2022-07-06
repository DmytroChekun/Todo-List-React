import React from "react";
import ListItemDates from "./ListItemDates";
import ListItemActionButtons from "./ListItemActionButtons";
import classNames from "classnames";
import axios from "axios";

const ListItem = ({ taskItem, setListData, listData, fetchTasksList }) => {

    const { createDate, finishDate, done, important, text, id } = taskItem;
    const listItemClasses = classNames(
        'todo-list__item', {'done': done, 'important': important }
    );

    const toggleDoneState = () => {
        let done, finishDate;

        setListData( listData.map( item => {
            if (item.id === id) {
                item.done = !item.done;
                done = item.done;
                done ?
                    item.finishDate = new Date().toLocaleString()
                    :
                    item.finishDate = null;
                finishDate = item.finishDate;
            }
            return item
        }));

        axios.put(`https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/${ id }`, { done: done, finishDate: finishDate } );
    }

    return (
        <li className={ listItemClasses } onClick={ toggleDoneState }>
            <div className="todo-list__item-content">
                <span className="todo-list__item-label"> { text } </span>
                <ListItemDates createDate={ createDate } finishDate={ finishDate } />
                <ListItemActionButtons
                    listData={ listData }
                    setListData={ setListData }
                    fetchTasksList={ fetchTasksList }
                    id={ id }
                />
            </div>
        </li>
    )
}

export default ListItem;
