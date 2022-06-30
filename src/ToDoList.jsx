import React, { useState } from 'react';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import CreateTaskBar from "./components/CreateTaskBar/CreateTaskBar";

const ToDoList = () => {

    const listDataInit = [
        {
            createDate: "15.05.2022, 20:07:02",
            done: false,
            finishDate: "17.05.2022, 15:17:26",
            id: "1",
            important: true,
            text: "Task1"
        },
        {
            createDate: "15.05.2022, 20:07:02",
            done: false,
            finishDate: "17.05.2022, 15:17:26",
            id: "2",
            important: false,
            text: "Task2"
        },
        {
            createDate: "15.05.2022, 20:07:02",
            done: true,
            finishDate: "17.05.2022, 15:17:26",
            id: "3",
            important: true,
            text: "Task3"
        }
    ]

    const [ listData, setListData ] = useState( listDataInit );

    const selectIdToNextTask = () => {
        let maxValue = 0;

        if (listData === '[]') {
            maxValue = 1;
        } else {
            listData.forEach(item => (
                +item.id > maxValue ? (maxValue = (+item.id + 1)) : ''
            ))
        }

        return maxValue;
    }


    return (
      <div className="container">
            <Header listData={ listData } />
            <List listData={ listData } setListData={ setListData } />
            <CreateTaskBar
                listData={ listData }
                setListData={ setListData }
                selectIdToNextTask={ selectIdToNextTask }
            />
      </div>
    );
}

export default ToDoList;
