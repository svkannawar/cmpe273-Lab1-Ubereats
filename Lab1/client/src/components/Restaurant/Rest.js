import React from 'react'

function Rest(props) {
    return (
    <li>
        <div>
            <img src={props.restProfileUrl} alt={props.name}/>
        </div>
        <div>
            <h3>{props.name}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div>
            <button>To Favourites</button>
        </div>
        </li>
    )
}

export default Rest
