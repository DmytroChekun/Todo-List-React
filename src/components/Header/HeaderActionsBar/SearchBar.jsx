import React from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {

    const handleSearch = value => {
        setSearchValue( value );
    }

    return(
        <input className="search-panel"
               type="text"
               name="search"
               value={ searchValue }
               placeholder="Type here to search"
               onChange={ e => handleSearch( e.target.value ) }
        />
    )
}

export default SearchBar;
