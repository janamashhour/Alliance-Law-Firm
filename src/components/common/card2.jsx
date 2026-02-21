import React from 'react';
import './card2.css';

const Card2 = (props) => {
    return ( 
        <>
        <div className="card2">
            <div className="year">
                <h4>{props.year}</h4>
            </div>
            <h3>{props.story}</h3>
        </div>
        </>
     );
}
 
export default Card2;