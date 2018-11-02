import React from 'react'

import './styled-search.sass';

const Search = ( { handleSubmit, handleChange, inputVal, actionPlus, actionMinus, users, page} ) => {
    let plusPageBtn, minusPageBtn, pageCount;

    if (users.length > 0) {
        plusPageBtn = <button onClick={actionPlus}>Next</button>;
        pageCount = <p>{page.pageNr}</p>
        
        if (page.pageNr > 0) { 
          minusPageBtn = <button onClick={actionMinus}>Prev</button>;
        }
      }
    return (
        <div className='formContainer'>
            <form className='searchForm' onSubmit={handleSubmit} >
                <input 
                type='text' 
                placeholder='Type username'
                ref={inputVal} 
                onChange={handleChange} />
                <button type='submit'>Search</button>
                <div className='pagesNavigation'>
                {minusPageBtn}
                {pageCount}
                {plusPageBtn}
            </div>
        </form>
        </div>
    )
}

export default Search