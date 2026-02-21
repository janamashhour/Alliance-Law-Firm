import React from 'react';
import Header from '../components/layout/header';
import './home.css';
import Accessibility from '../components/layout/accessibility';
import Copyrights from '../components/layout/copyrights';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';

const Home = () => {
    return ( 
        <>
        <Accessibility />
        <Header />
        <main>
            <Hero />
            <div className="column">
                <Footer />
                <Copyrights />  
            </div>
        </main>
        </>
     );
}
 
export default Home;