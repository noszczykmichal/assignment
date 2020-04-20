import React from 'react';

const userInput = (props) => {

    const style={
        width: '12em',
        height: '2em',
        border: '2px solid green'
    }

    return (
        <div>
            <input type="text" onChange={props.change} value={props.currentName} style={style}/>
        </div>
        
    )
}

export default userInput;