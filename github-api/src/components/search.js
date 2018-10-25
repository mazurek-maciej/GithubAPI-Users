import React from 'react'

import '../resources/styles/styled-search.sass';

const Search = ( { handleSubmit, handleChange, inputVal, plus, minus, pageCount} ) => (
    <form className='searchForm' onSubmit={handleSubmit} >
        <input 
        type='text' 
        placeholder='Type username'
        ref={inputVal} 
        onChange={handleChange} />
        <button type='submit'>Search</button>
        <div className='pagesNavigation'>
        {minus}
        {pageCount}
        {plus}
    </div>
</form>
)

export default Search