import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header: React.FC = () =>
    (
        <div>
            <nav className="navbar" role="navigation">
                <div className="navbar navbar-expand">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item"><a className="nav-link" href="#">Acceuil</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Portfolio</a></li>
                    </ul>
                </div>
                <div className="navbar navbar-expand">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <div className="navbar navbar-expand">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">A propos</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );



export default Header;