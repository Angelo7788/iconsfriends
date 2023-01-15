import React, {useEffect, useState} from 'react';
import Cardlist from '../component/Cardlist';
import '../index.css';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';

const App = () => {

    const familyObj = {
        familyMember: [],
        searchField: ''
    };

    const [familyObjState, setFamilyObjState] = useState(familyObj);
    const [loading, setLoading] = useState(true);
    // to handle the loading time 

    const onSearchChange = (event) => {
        setFamilyObjState({...familyObjState, searchField: event.target.value});
    }

    useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setFamilyObjState({...familyObjState, familyMember: users}))
        .then(setLoading(false));     
    },[]);

    const filteredFamily = familyObjState.familyMember.filter(familyMember => {
        return familyMember.name.toLocaleLowerCase()
        .includes(familyObjState.searchField.toLocaleLowerCase())
    });

    return(
        <div className='tc' >
            { loading && (
                <h1>Loading....</h1>
            )}
            
            <h1 className='f1' >Icons Family</h1>
            <SearchBox onSearch={onSearchChange} />
            <Scroll>
                <Cardlist family={filteredFamily} />
            </Scroll>   
        </div>
    )
}

export default App;
