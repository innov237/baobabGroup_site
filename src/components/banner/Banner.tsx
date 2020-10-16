import React from 'react';
import './Banner.css';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import phoneIcon from "../../images/phone-build.png";

const Banner: React.FC = () => (
    <div className="banner-div container-fluid">
        <div className="row">
            <div className="col-md-8">
                <OwlCarousel
                    className="owl-theme"
                    items={1}
                    dots={true}
                    dotClass="dot-div"
                    dotsSpeed={true}
                    autoplay={true}
                    autoplaySpeed={500}
                    loop={true}
                >
                    <div className="item">
                        <div className="slider-content">
                            <h1 className="hero__title">Creating Digital Experiences <br /> That Drive Growth</h1>
                            <div className="hero__subTitle">
                                A web design, development, and digital marketing agency with a passionate belief in the power of technology to positively transform business practices.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-content">
                            <h1 className="hero__title">Technology solutions <br /> Expert</h1>
                            <div className="hero__subTitle">
                                A web design, development, and digital marketing agency with a passionate belief in the power of technology to positively transform business practices.
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                <div className="contact-usBtn pb-3 pt-5">
                    <button className="btn btn-more">Contact us</button>
                </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center p-0">
                <img src={phoneIcon} alt="" style={{ width: '100%' }} className="p-2" />
            </div>
        </div>


    </div>
);

export default Banner;