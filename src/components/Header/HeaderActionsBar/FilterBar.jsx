import React from "react";

const FilterBar = ({ filterState, setFilterState }) => {

    const buttonsData = [
        {
            value: 'all',
            textValue: 'All',
            active: filterState === "all"
        },
        {
            value: 'todo',
            textValue: 'Active',
            active: filterState === "todo"
        },
        {
            value: 'done',
            textValue: 'Done',
            active: filterState === "done"
        }
    ]

    return (
        <div className="filter-btns">
            {
                buttonsData.map( data => (
                    <button
                        key={ data.value }
                        onClick={ ()=> setFilterState( data.value ) }
                        className={
                            `filter-btn 
                            ${data.value}
                            ${data.active ? 'active' : ''}`
                        }>
                        { data.textValue }
                    </button>
                ))
            }
        </div>
    )
}

export default FilterBar;
