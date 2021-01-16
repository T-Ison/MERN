import React from 'react';


const BoxDisplay = (props) => {
    const {boxes} = props;


    return(
        <div style={{display:'flex', justifyContent:'space-around'}}>
        {
            //
            boxes.map((box, i) => {
                return (
                    <div key={i} style={{
                        width: box.boxSize +"px", 
                        height: box.boxSize +"px",
                        backgroundColor: box.boxColor,
                        marginTop: '10px'
                    }}>
                    </div>
                )
            } )
        }
        </div>
    );
}
export default BoxDisplay;


