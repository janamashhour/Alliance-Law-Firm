import React from 'react';
import './card3.css';

const Card3 = (props) => {
    return (
        <>
        <div className="card3">
            <img src={props.expert} alt={props.expertdesc} />
            <div className="expert">
                <h4>{props.name}</h4>
                <h3>{props.jobtitle}</h3>
            </div>
        </div>
        </>
     );
}
 
export default Card3;