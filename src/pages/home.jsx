import React from 'react';
import Header from '../components/layout/header';
import './home.css';
import Copyrights from '../components/layout/copyrights';
import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';
import SecTitle from '../components/common/sectitle';
import Card1 from '../components/common/card1';
import card1img1 from '../assets/icons/sec1-icon1-dark.svg';
import card1img2 from '../assets/icons/sec1-icon2-dark.svg';
import card1img3 from '../assets/icons/sec1-icon3-dark.svg';
import Btn from '../components/common/button';
import Theme from '../components/common/themebtn';
import '../root.css';


const Home = () => {
    return ( 
        <>
        <article>
            <Theme />
        </article>
        <Header />
        <main>
            <Hero />
            <section className='secCont'>
                <SecTitle sectitle="ACHIEVEMENTS" secdesc="Alliance Law is consistently ranked among the leading law firms in Egypt by Chambers & Partners, Legal 500 and IFLR1000." />
                <div className="cards-row">
                    <Card1 card1icon={card1img1} cardimgdesc="Chambers Global logo" card1title="Chambers Global" card1text='"Alliance Law is practical and understands how to work with multinational companies. The team is responsive and efficient in giving commercial advice."' />
                    <Card1 card1icon={card1img2} cardimgdesc="IFLR1000 logo" card1title="IFLR1000" card1text='"They are responsive, always with a timely and business oriented advice. Their fees are reasonable as well."' />
                    <Card1 card1icon={card1img3} cardimgdesc="The Legal 500 logo" card1title="The Legal 500" card1text='"The service is invaluable as they help make us succeed in the market by solving our issues in a very knowledgeable manner."' />
                </div>
                <Btn />
            </section>
            <div className="footertitle-decor">
                <div className="decor-line"></div>
                <div className="footer-diamond"></div>
                <div className="decor-line"></div>
            </div>
            <section className='secCont'>
                <SecTitle sectitle="OUR STORY" secdesc="Since its inception in 2015, Alliance Law has grown into a leading law firm in Egypt, delivering full-service legal solutions across key industries." />
                <Btn />
            </section>
            <div className="footertitle-decor">
                <div className="decor-line"></div>
                <div className="footer-diamond"></div>
                <div className="decor-line"></div>
            </div>
            <section className='secCont'>
                <SecTitle sectitle="OUR Experts" secdesc="Their combined expertise spans cross-border transactions, regulatory advisory and high-value corporate matters, trusted by multinational clients across key industries." />
                <Btn />
            </section>
            <div className="footertitle-decor">
                <div className="decor-line"></div>
                <div className="footer-diamond"></div>
                <div className="decor-line"></div>
            </div>
            <section className='secCont'>
                <SecTitle sectitle="Contact us" secdesc="At Alliance Law Group, we are here to help you with all your legal needs." />
                <Btn />
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