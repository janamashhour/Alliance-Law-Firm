import React from 'react';
import Header from '../components/layout/header';
import './home.css';
import Accessibility from '../components/layout/accessibility';
import Copyrights from '../components/layout/copyrights';
import Footer from '../components/layout/footer';

const Home = () => {
    return ( 
        <>
        <Accessibility />
        <Header />
        <main>
            <Footer />
            <Copyrights />  
        </main>
        </>
     );
}
 
export default Home;