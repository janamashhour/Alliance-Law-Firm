import React from 'react';
import './header.css';
import HeaderItem from '../common/headeritem';

const Header = () => {
    return ( 
        <>
        <header>
            <div className="logo-row">
                <div className="logo"></div>
                <div className="line"></div>
                <h3>Alliance Law</h3>
            </div>
            <nav>
                <ul>
                    <HeaderItem location="#home" headeritem="Home" />
                    <HeaderItem location="#home" headeritem="Achievements" />
                    <HeaderItem location="#home" headeritem="Our Story" />
                    <HeaderItem location="#home" headeritem="Experts" />
                    <HeaderItem location="#home" headeritem="Contact" />
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Header;