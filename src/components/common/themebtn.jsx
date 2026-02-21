import React from 'react';
import '../../root.css';
import sun from '../../assets/icons/sun-icon.svg';
import moon from '../../assets/icons/moon-icon.svg';
import './themebtn.css';


function Theme() {
    const setTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme)
    };
    
    return (
        <>
        <div className="theme-row">
            <button className='themebtn' onClick={() => setTheme("dark")}>
                <img src={moon} alt="moon svg" />
            </button>
            <button className='themebtn' onClick={() => setTheme("light")}>
                <img src={sun} alt="sun svg" />
            </button>
        </div>
        </>
    )
}
 
export default Theme;