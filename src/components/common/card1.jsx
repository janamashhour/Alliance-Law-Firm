import React from 'react';
import './card1.css';

const Card1 = (props) => {
    return ( 
        <>
        <div className="card1">
            <img src={props.card1icon} alt={props.cardimgdesc} />
            <p>{props.card1title}</p>
            <div className="footertitle-decor">
                <div className="decor-line"></div>
                <div className="footer-diamond"></div>
                <div className="decor-line"></div>
            </div>
            <h3>{props.card1text}</h3>
        </div>
        </>
     );
}
 
export default Card1;