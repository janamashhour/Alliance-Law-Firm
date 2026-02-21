import React from 'react';
import './footertitle.css';

const FooterTitle = (props) => {
    return ( 
        <>
        <div className="column">
            <h4 className='footertitle'>{props.footertitle}</h4>
            <div className="footertitle-decor">
                <div className="decor-line"></div>
                <div className="footer-diamond"></div>
                <div className="decor-line"></div>
            </div>
        </div>
        </>
     );
}
 
export default FooterTitle;