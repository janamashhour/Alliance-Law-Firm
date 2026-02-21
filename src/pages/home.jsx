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
import sec2decor from '../assets/imgs/sec2-decor.png';
import Card2 from '../components/common/card2';
import Card3 from '../components/common/card3';
import expert1 from '../assets/imgs/expert1.png';
import expert2 from '../assets/imgs/expert2.png';
import expert3 from '../assets/imgs/expert3.png';
import expert4 from '../assets/imgs/expert4.png';



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
                <div className="row">
                    <div className="cards-col">
                        <Card2 year="2025" story="Celebrating our 10th anniversary" />
                        <Card2 year="2022" story="Third expansion in South Teseen, New Cairo, located in the heart of the city's commercial center" />
                        <Card2 year="2019" story="Achieved an annual growth rate of approximately 61% compared to the previous year" />
                    </div>
                    <img className='sec2-decor display-flex' src={sec2decor} alt="decor" />
                    <div className="cards-col">
                        <Card2 year="2018" story="Second expansion" />
                        <Card2 year="2017" story="First expansion in Smart Village, Cairo" />
                        <Card2 year="2016" story="Recognized by Who's Who Legal as a leading Technology, Media, and Telecom law firm" />
                    </div>
                </div>
                <Btn />
            </section>
            <div className="footertitle-decor">
                <div className="decor-line"></div>
                <div className="footer-diamond"></div>
                <div className="decor-line"></div>
            </div>
            <section className='secCont'>
                <SecTitle sectitle="OUR Experts" secdesc="Their combined expertise spans cross-border transactions, regulatory advisory and high-value corporate matters, trusted by multinational clients across key industries." />
                <div className="cards-row">
                    <Card3 expert={expert1} expertdesc="pic of Dr. Ashraf" name="Dr. Ashraf Abou ElKheir" jobtitle="Founder" />
                    <Card3 expert={expert2} expertdesc="pic of Dr. Mohamed" name="Dr. Mohamed Al Rafie" jobtitle="Co-Founder"  />
                    <Card3 expert={expert3} expertdesc="pic of Hagar" name="Hagar Mohamed" jobtitle="Counsel" />
                    <Card3 expert={expert4} expertdesc="pic of Ahmed" name="Ahmed Hammam" jobtitle="Senior Associate" />
                </div>
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