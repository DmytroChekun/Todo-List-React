import React from "react";

const HeaderInfo = ({ listData }) => {

    let doneTasksCount = 0;
    let activeTasksCount = 0;

    listData.map( arr => arr.done ? doneTasksCount++ : activeTasksCount++ );


    return(
        <div className="todo-header__top-section">
            <h1 className="todo-header__title">TODO LIST</h1>
            <h2 className="todo-header__todo-info">
                <span className="todo-count">{ activeTasksCount }</span> more to do,
                <span className="done-count"> { doneTasksCount }</span> done
            </h2>
        </div>
    )
}

export default HeaderInfo;