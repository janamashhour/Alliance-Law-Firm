import React from 'react';
import './hero.css';
import heroimg from '../../assets/imgs/hero-img.png';

const Hero = () => {
    return ( 
        <>
        <section className='hero'>
            <img src={heroimg} alt="A png of lady justice" />
            <article className='hero-div'>
                <h1>Solving legal matters with confidence</h1>
                <h3>A dedicated legal team committed to protecting your rights and securing your future</h3>
            </article>
        </section>
        </>
     );
}
 
export default Hero;