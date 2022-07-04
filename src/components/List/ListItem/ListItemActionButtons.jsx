import React from "react";
import removeIco from "../../../img/trash-can.svg";
import axios from "axios";

const ListItemActionButtons = ({ listData, setListData, fetchTasksList, id }) => {

    const deleteTask = e => {
        e.stopPropagation();
        axios.delete(`https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/${ id }`)
            .then(fetchTasksList);
    }

    const toggleImportant = e => {
        e.stopPropagation();
        let importantState;

        listData.forEach( item => {
            if (item.id === id) {
                return importantState = !item.important;
            }
        });
        axios.put(`https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/${ id }`, { important: importantState } )
            .then(fetchTasksList);
    }

    return (
        <span className="todo-list__item-btns">
            <button
                className="todo-list__item-btn delete"
                onClick={ (e)=> deleteTask( e ) }
            >
                <img src={ removeIco } alt="" />
            </button>
            <button
                className="todo-list__item-btn important"
                onClick={ (e)=> toggleImportant( e ) }
            >!</button>
        </span>
    )
}

export default ListItemActionButtons;