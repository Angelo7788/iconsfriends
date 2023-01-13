import React, {useState} from 'react';
import Cardlist from './Cardlist';
import { family } from './Family';
import './index.css';
import SearchBox from './SearchBox';
import './App.css';



const App = () => {

    const familyObj = {
        familyMember: family,
        searchField: ''
    };


    const [familyObjState, setFamilyObjState] = useState(familyObj);

    const onSearchChange = (event) => {
        setFamilyObjState({...familyObjState, searchField: event.target.value});
    }

    const filteredFamily = familyObjState.familyMember.filter(familyMember => {
        return familyMember.name.toLocaleLowerCase().includes(familyObjState.searchField.toLocaleLowerCase())
    });

    // filter to change the obj to shows in function of the search box //

    return(
        <div className='tc' >
            <h1 className='f1' >Icons Family</h1>
            <SearchBox onSearch={onSearchChange} />
            <Cardlist family={filteredFamily} />
        </div>
    )
}

export default App;
