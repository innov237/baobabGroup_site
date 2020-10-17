import React from 'react';
import logo from '../../images/logo.png';
import email from '../../images/email.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import { DividerVertical } from '../dividerVertical/DividerVertical';
import './Footer.css'


export const Footer = () => (
    <div className="footer">
        <DividerVertical></DividerVertical>
        <div className="container pb-5 d-flex align-items-center justify-content-center">
            <div className="row align-items-end">
                <div className="col-md-6">
                    <img src={logo} alt="logo" style={{ width: "200px" }} className="pt-5 pb-3" />
                    <p style={{ color: "#80889B;", fontSize: "15px" }}>
                        Partnering with a family-owned, industry leader with a sole focus on helping customers grow and achieve success is a winning combination. The team at baobagroup.com understands that each client has a different story and unique digital goals. Regardless of business size, industry, or technology.
                     </p>
                      <img src={facebook}  className="social-icon" style={{ width: "30px" }}  alt="" />
                      <img src={twitter} className="social-icon" style={{ width: "30px" }}  alt="" />
                      <img src={linkedin} className="social-icon" style={{ width: "30px" }}  alt="" />
                      <img src={instagram} className="social-icon" style={{ width: "30px" }}  alt="" />
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h3>Our Headerquaters</h3></li>
                        <li>
                            4400 East West Highway, Bethesda, MD 20814
                        </li>
                        <li>
                            Nouvelle route bastos, Yaoundé cameroun
                        </li>

                    </ul>

                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h3>Contact Us</h3></li>
                        <li>USA & Cameroon Contacts</li>
                        <li> <img src="https://seremoworld.com/assets/img/usa-today.png" style={{ width: "20px" }} alt="flag" /> +1 (718) 924 – 0017</li>
                        <li> <img src="https://seremoworld.com/assets/img/cameroon.png" style={{ width: "20px" }} alt="flag" /> (+237) 697900523</li>
                        <li> <img src={email} style={{ width: "20px" }} alt="flag" /> contact@baobagroup.com</li>
                    </ul>

                </div>

                <div className="col-md-12 text-center pt-5">
                    <p>   © 2020 Innov237.Tous droits réservés.</p>
                </div>
            </div>

        </div>
    </div>
);