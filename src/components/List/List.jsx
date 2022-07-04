import React from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ listData, setListData, dataToShow, fetchTasksList }) => {

    return(
        <ul className="list-group todo-list">
            {
                dataToShow.map( taskItem => (
                    <ListItem
                        key={ taskItem.id }
                        taskItem={ taskItem }
                        listData={ listData }
                        setListData={ setListData }
                        fetchTasksList={ fetchTasksList }
                    />
                ))
            }
        </ul>
    )
}

export default List;