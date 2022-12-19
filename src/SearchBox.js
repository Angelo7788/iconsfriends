import React from 'react';
import './index.css';

const SearchBox = () => {
    return (
        <div className='pa2' >
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search robots '
            />
        </div>
    )
}

export default SearchBox;

