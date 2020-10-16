import React from 'react';
import logo from '../../images/logo.png';
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
                        Nous somme une entreprise spétialisé dans le digital. nous offrons des services telque : Conseil,
                        création graphique, UX, conception, développement,
                        référencement naturel (SEO) et référencement payant.
                        Nous adaptons nos services à vos besoins pour vous proposer
                        la meilleure solution digitale.
                     </p>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h3>Contact</h3></li>
                        <li>
                            Tsinga-fecaboot, Yaoundé cameroun
                        </li>
                        <li>contact@innov237.com</li>
                        <li>(+237) 697900523</li>
                        <li>Lun-sam de 8h à 16h</li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h3>Services</h3></li>
                        <li>
                            Développement Web & mobile
                        </li>
                        <li>
                            Conception de design
                        </li>
                        <li>
                            Le marketing numérique
                        </li>
                        <li>
                            Etc...
                        </li>
                    </ul>

                </div>
                <div className="col-md-12 text-center pt-5">
                    <p>   © 2020 Innov237.Tous droits réservés.</p>
                </div>
            </div>

        </div>
    </div>
);