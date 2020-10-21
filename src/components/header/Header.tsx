import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import iconMenu from '../../images/menu.svg';
import iconClose from '../../images/close.svg';

export default function Header() {

    const [shoMenu, setstate] = useState(false);
    const [overflowType, setstateOverFlow] = useState("block");


    const css = `
    body {
        overflow:${overflowType};
    }
    `;

    const showMenuf = () => {
        setstate(!shoMenu);
        if (shoMenu == false) {
            setstateOverFlow("hidden");
        } else {
            setstateOverFlow("block");
        }

    }

    return (
        <div>
            <style>
                {css}
            </style>
            <nav className="navbar navbar-lg" role="navigation">
                <div className="navbar navbar-expand">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Portfolio</a></li>
                    </ul>
                </div>
                <div className="navbar">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
                </div>
                <div className="navbar navbar-expand">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    </ul>
                </div>
                <div className="navbar nav-menu">
                    <ul className="nav navbar-nav navbar-left" onClick={showMenuf}>
                        <li className="nav-item"><img src={!shoMenu ? iconMenu : iconClose} className="menu-icon" style={{ width: "50px" }} /></li>
                    </ul>
                </div>

            </nav>
            <div className="menu__collaps" style={{ display: shoMenu ? "block" : "none" }}>
                <div className="menu__collaps__items">

                    <ol>
                        <li>
                            <a href="/home">
                                Our services
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                Our Works
                            </a>
                        </li>
                        <li>
                            <a href="/home">
                                Our Teams
                            </a>
                        </li>
                    </ol>

                </div>
            </div>
        </div>

    );

};

