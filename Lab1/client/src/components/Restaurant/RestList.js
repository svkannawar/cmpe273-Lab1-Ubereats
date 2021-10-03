import React from 'react'
import Rest from './Rest';
function RestList(props) {

    return (
       
            <ul>
                
            {props.restaurants.map(restaurant=>
                <Rest key={restaurant.id} id={restaurant.id}  name={restaurant.name}
                 restProfileUrl={restaurant.restProfileUrl}  address={restaurant.address} 
                 description={restaurant.description}/>
            

            )}
            </ul>
        
    )
}

export default RestList
