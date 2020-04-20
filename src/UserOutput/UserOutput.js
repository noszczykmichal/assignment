import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="Output">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae deleniti iste magnam numquam placeat atque natus architecto magni laudantium, a harum! Deleniti, in? Fugit repellat cupiditate optio rem voluptatum?</p>
            <p>{props.username}</p>
        </div>
    )
}


export default userOutput;