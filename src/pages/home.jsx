import React from 'react';
import Header from '../components/layout/header';
import './home.css';
import Accessibility from '../components/layout/accessibility';
import Copyrights from '../components/layout/copyrights';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';
import SecTitle from '../components/common/sectitle';

const Home = () => {
    return ( 
        <>
        <Accessibility />
        <Header />
        <main>
            <Hero />
            <section className='secCont'>
                <SecTitle sectitle="ACHIEVEMENTS" secdesc="Alliance Law is consistently ranked among the leading law firms in Egypt by Chambers & Partners, Legal 500 and IFLR1000." />
            </section>
            <div className="column">
                <Footer />
                <Copyrights />  
            </div>
        </main>
        </>
     );
}
 
export default Home;