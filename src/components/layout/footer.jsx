import React from 'react';
import './footer.css';
import FooterTitle from '../common/footertitle';
import FooterItem from '../common/footeritem';

const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="footer-col">
                <FooterTitle footertitle="Contact Info" />
                <div className="footeritems">
                    <p>A: 2nd Floor, Plot No. 15 Ninetieth Street, New Cairo, Cairo, Egypt.</p>
                    <p>T: +202 2812 4499</p>
                    <p>E: info@shandpartners.com</p>
                </div>
            </div>
            <div className="footer-col">
                <FooterTitle footertitle="Quick Links" />
                <div className="footeritems">
                    <FooterItem footerlocation="#footer" footeritem="Home" />
                    <FooterItem footerlocation="#footer" footeritem="Achievements" />
                    <FooterItem footerlocation="#footer" footeritem="Our Story" />
                    <FooterItem footerlocation="#footer" footeritem="Experts" />
                    <FooterItem footerlocation="#footer" footeritem="Contact" />
                </div>
            </div>
            <div className="footer-col">
                <FooterTitle footertitle="Practice Areas" />
                <div className="footeritems-row">
                    <div className="column gap-12">
                        <FooterItem footerlocation="#footer" footeritem="Domestic Offences" />
                        <FooterItem footerlocation="#footer" footeritem="Banking & Finance" />
                        <FooterItem footerlocation="#footer" footeritem="Business Law" />
                        <FooterItem footerlocation="#footer" footeritem="Internet Crime" />
                        <FooterItem footerlocation="#footer" footeritem="Youth Charges" />
                    </div>
                    <div className="column gap-12">
                        <FooterItem footerlocation="#footer" footeritem="Family Law" />
                        <FooterItem footerlocation="#footer" footeritem="Real Estate" />
                        <FooterItem footerlocation="#footer" footeritem="Employment" />
                    </div>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;