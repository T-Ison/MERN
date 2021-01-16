import React from 'react';
import { Link } from '@reach/router';

const Number = (props) => {
    return (
        <div>
            {
                isNaN(props.value) 
                ? <p>The word is: {props.value}</p> 
                : <p>The number is: {props.value}</p>
            }
        </div>
    );
}

export default Number;