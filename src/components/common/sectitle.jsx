import React from 'react';
import './sectitle.css';

const SecTitle = (props) => {
    return ( 
        <>
        <div className="sectitle">
            <h1>{props.sectitle}</h1>
            <p>{props.secdesc}</p>
        </div>
        </>
     );
}
 
export default SecTitle;