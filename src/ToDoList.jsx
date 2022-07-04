import React, { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import CreateTaskBar from "./components/CreateTaskBar/CreateTaskBar";
import axios from 'axios';

const ToDoList = () => {

    const [ listData, setListData ] = useState([]);
    const [ filterState, setFilterState ] = useState("all");
    const [ searchValue, setSearchValue ] = useState("");

    const baseUrl = 'https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/';

    const fetchTasksList = () => {
        axios.get(baseUrl)
            .then(response => setListData(response.data));
    };


    useEffect(() => {
        fetchTasksList();
    }, []);


    // const initialData = [
    //     {
    //         createDate: "15.05.2022, 20:07:02",
    //         done: false,
    //         finishDate: null,
    //         id: 1,
    //         important: true,
    //         text: "Task1"
    //     },
    //     {
    //         createDate: "15.05.2022, 20:07:02",
    //         done: false,
    //         finishDate: null,
    //         id: 2,
    //         important: false,
    //         text: "Task2"
    //     },
    //     {
    //         createDate: "15.05.2022, 20:07:02",
    //         done: false,
    //         finishDate: null,
    //         id: 3,
    //         important: true,
    //         text: "Task3"
    //     }
    // ]




    let dataToShow = listData.slice().sort(
        ( a, b ) => a.done - b.done
    );

    switch ( filterState ) {
        case "all":
            break
        case "done":
            dataToShow = listData.filter(
                 item => item.done
            );
            break
        case "todo":
            dataToShow = listData.filter(
                item => !item.done
            );
            break
        default:
            break
    }



    return (
      <div className="container">
            <Header
                listData={ listData }
                filterState={ filterState }
                setFilterState={ setFilterState }
                searchValue={ searchValue }
                setSearchValue={ setSearchValue }
            />
            <List
                listData={ listData }
                setListData={ setListData }
                fetchTasksList={ fetchTasksList }
                dataToShow={
                    searchValue ?
                        dataToShow.filter(item =>
                            item.text.toLowerCase().includes(searchValue.toLowerCase())
                        )
                        :
                        dataToShow
                }
            />
            <CreateTaskBar
                listData={ listData }
                setListData={ setListData }
                fetchTasksList={ fetchTasksList }
            />
      </div>
    );
}

export default ToDoList;
