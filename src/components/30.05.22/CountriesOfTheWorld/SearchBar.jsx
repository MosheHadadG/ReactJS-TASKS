import React from 'react'

function SearchBar({handleChange , inputValue }) {
  return (
    <div>
      <input value={inputValue} onChange={handleChange} type="text" />
    </div>
  )
}

export default SearchBar