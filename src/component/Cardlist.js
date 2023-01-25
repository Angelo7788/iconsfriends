import React from "react";
import Card from './Card';

const Cardlist = ( {family} ) => {

  // if (true) {
  //   throw new Error('Noooo!')
  // }
    
    return(
    <div>
      {
        family.map((user, index) => {
            return(
                <Card 
                key={family[index].id} 
                id={family[index].id} 
                name={family[index].name} 
                email={family[index].email} 
                />
            ) 
        })
      }
    </div>
    )
}

// the key prop should be a value that do not change if we change the array, so a better key instead of index 
// is to use the id value

export default Cardlist;

