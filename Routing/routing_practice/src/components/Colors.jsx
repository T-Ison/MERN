import React from 'react';
import { Link } from '@reach/router';


const Colors = (props) => {
    const boxStyle = {
        backgroundColor: props.color2,
        color: props.color1,
    };

    return (
        <div style={boxStyle}>
            {
                isNaN(props.value) 
                ? <p>The word is: {props.value}</p> 
                : <p>The number is: {props.value}</p>
            }

        </div>
    );
}

export default Colors;