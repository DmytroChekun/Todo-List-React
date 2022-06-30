import React from "react";

const FilterBar = () => {

    const buttonsData = [
        {
            classValue: 'all',
            textValue: 'All',
            active: true
        },
        {
            classValue: 'todo',
            textValue: 'Active',
            active: false
        },
        {
            classValue: 'done',
            textValue: 'Done',
            active: false
        }
    ]

    return(
        <div className="filter-btns">
            {
                buttonsData.map( data => (
                    <button
                        key={ data.classValue }
                        className={
                            `filter-btn 
                            ${data.classValue}
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
