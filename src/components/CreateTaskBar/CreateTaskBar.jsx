import React, { useState } from "react";
import axios from "axios";

const CreateTaskBar = ({ listData, setListData, fetchTasksList }) => {

    const [ inputValue, setInputValue ] = useState('');

    const selectIdToNextTask = () => {
        let maxValue = 1;

        listData.forEach(item => (
            item.id >= maxValue
                ? maxValue = (+item.id + 1)
                : ''
        ))

        return maxValue;
    }

    const onCreate = text => {
        if (text) {
            const newTask = {
                text: text,
                done: false,
                id: selectIdToNextTask(),
                important: false,
                createDate: new Date().toLocaleString(),
                finishDate: null
            }
            axios.post(`https://6274f9b95dc4f5764b9c52e4.mockapi.io/todo/tasks/`,  newTask )
                .then(fetchTasksList);

            const updatedTasks = listData.concat( newTask );
            setListData( updatedTasks );
            setInputValue( '' );
        }
    }

    const handleChange = ( value ) => {
        setInputValue( value );
    }

    return (
        <div className="add-item-form">
            <input className="add-item-input"
                   type="text"
                   placeholder="Type new task here"
                   value={ inputValue }
                   onChange={ event => handleChange( event.target.value ) }
                   onKeyPress={ event => event.key === "Enter" && onCreate( inputValue )  }
            />
            <button
                className="add-item-btn"
                onClick={ ()=> onCreate( inputValue )  }
            >
                Add New Item
            </button>
        </div>
    )
}

export default CreateTaskBar;