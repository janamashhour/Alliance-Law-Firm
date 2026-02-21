import React from 'react';
import './headeritem.css';

const HeaderItem = (props) => {
    return ( 
        <>
        <li>
            <a href="{props.location}">{props.headeritem}</a>
        </li>
        </>
     );
}
 
export default HeaderItem;