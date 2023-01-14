import React, {useEffect, useState} from 'react';
import Cardlist from './Cardlist';
import './index.css';
import SearchBox from './SearchBox';
import './App.css';



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
        return familyMember.name.toLocaleLowerCase().includes(familyObjState.searchField.toLocaleLowerCase())
    });

    

    return(

        <div className='tc' >

            { loading && (
                <h1>Loading....</h1>
            )}
            
            <h1 className='f1' >Icons Family</h1>
            <SearchBox onSearch={onSearchChange} />
            <Cardlist family={filteredFamily} />
            
        </div>
    )
}

export default App;
