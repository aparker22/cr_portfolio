import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

export const Footer = () => {
    return(
        <div className="footer">
            <div className="contact-container">
                <h5>Contact</h5>
                <div className="contact">
                    <div className="address">
                        <h6>1767 Streamview Ln</h6>
                        <h6>Atlanta, GA</h6>
                    </div>
                    <div className="email">
                        <h6>candace.rowell@gmail.com</h6>
                        <h6>(912) 288-5984</h6>
                    </div>
                </div>
            </div>
            <div className="social"><a href="https://www.facebook.com/candace.rowell.92"><img src={facebook} className="soc-img" /></a>
            <a href="https://www.instagram.com/candacerowell/"><img src={instagram} className="soc-img-inst"/></a></div>
        </div>
    ) 
};