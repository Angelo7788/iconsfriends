import React from 'react';
import Cardlist from './Cardlist';
import { family } from './Family';
import './index.css';
import SearchBox from './SearchBox';


const App = () => {
    return(
        <div className='tc' >
            <h1 className='Header' >Icons Family</h1>
            <SearchBox />
            <Cardlist family={family} />
        </div>
    )
}

export default App;
