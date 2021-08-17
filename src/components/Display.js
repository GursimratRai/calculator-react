import React from 'react';

//function for displaying the result
function Display(props) {
    const result = props.result;
    return (
        <div id='display'>
           <p>{`${result}`}</p>
        </div>
    );
}

export default Display;