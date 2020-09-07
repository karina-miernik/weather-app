import React from 'react'

const SearchBox = ({ handleOnPress, handleOnChange, queryValue }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleOnChange}
        value={queryValue}
        onKeyPress={handleOnPress}
      />
    </div>
  )
}

export default SearchBox
