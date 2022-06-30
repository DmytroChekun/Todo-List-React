import React, { useState } from "react";

const CreateTaskBar = ({ listData, setListData, selectIdToNextTask }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = ( value ) => {
        setInputValue( value );
    }

    const addNewTask = () => {
        const arrayCopy = [ ...listData ];
        const newTask = {
            text: inputValue,
            done: false,
            id: selectIdToNextTask(),
            important: false,
            createDate: new Date().toLocaleString(),
            finishDate: null
        }
        arrayCopy.push({ ...newTask });
        // setListData([ ...inputValue, { ...newTask } ]);
        setListData( arrayCopy );
        console.log( listData );
    }

    return (
        <div className="add-item-form">
            <input className="add-item-input"
                   type="text"
                   placeholder="Type new task here"
                   onChange={ event => handleChange( event.target.value ) }
            />
            <button
                className="add-item-btn"
                onClick={ addNewTask }
            >
                Add New Item
            </button>
        </div>
    )
}

export default CreateTaskBar;