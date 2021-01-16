import React, { useState } from 'react';


const ColorForm = (props) =>{
    const {boxes, setboxes} = props;
    
    const [boxColor, setBoxColor] = useState("");
    const [boxSize, setBoxSize] = useState(50);

    // if needed by other components/sources keep in parent
    /* createBox  equivalent but needed for more passing arguments*/
    const createBox = (e) => {
        e.preventDefault();
                                // creating an object to pass over to .map in BoxDisplay
        const newList = [...boxes, {boxColor, boxSize}];
        setboxes(newList);
        setBoxColor("");
        setBoxSize(0);
        
    }

    return (
        <form onSubmit={(e) => createBox(e)}>
            <label>Color</label>
            <input 
                type="text" 
                onChange={(e) => {setBoxColor(e.target.value)}} 
                value={boxColor}
            />
            <label>Size</label>
            <input 
                type="number" 
                onChange={(e) => {setBoxSize(e.target.value)}}
                value={boxSize}
                />
            <button>Submit</button>
        </form>
    );
}

export default ColorForm;
