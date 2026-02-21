import React from 'react';
import './footeritem.css';

const FooterItem = (props) => {
    return ( 
        <>
        <a href="{props.footerlocation}">{props.footeritem}</a>
        </>
     );
}
 
export default FooterItem;