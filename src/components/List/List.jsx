import React from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ listData, setListData }) => {

    return(
        <ul className="list-group todo-list">
            {
                listData.map( taskItem => (
                    <ListItem
                        key={ taskItem.id }
                        taskItem={ taskItem }
                        setListData={ setListData }
                    />
                ))
            }
        </ul>
    )
}

export default List;