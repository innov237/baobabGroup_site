import React from 'react';
import Banner from '../../components/banner/Banner';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import iconweb from '../../images/icon-web.png';
import icondesign from '../../images/icon-design.png';
import iconstrategy from '../../images/icon-strategy.png';
import iconhosting from '../../images/icon-hosting.png';
import iconmarketing from '../../images/icon-marketing.png';
import iconia from '../../images/icon-ia.png';
import iconformation from '../../images/icon-formation.png';
import iconserviceclient from '../../images/icon-service-client.png';
import phonebuild2 from '../../images/phone2-img.png';
import './Home.css';
import { DividerVertical } from '../../components/dividerVertical/DividerVertical';

var serviceData = [
    {
        icon: iconweb,
        title: "Web & mobile development",
        description: "We develop award-winning websites and mobile apps designed to deliver value and results"
    },
    {
        icon: icondesign,
        title: "Design conception",
        description: "Our award-winning UX designers create visually impressive and functional online experiences, designed with your audience in mind."
    },
    {
        icon: iconmarketing,
        title: "Digital marketing",
        description: "Through SEO, content, email marketing and more, we develop strategies that grow your business"
    },
    {
        icon: iconstrategy,
        title: "Strategy and outlook",
        description: "Through in-depth research and analysis, our team of web experts build a bespoke digital strategy that matches your brand."
    },
    {
        icon: iconhosting,
        title: "Hosting and security",
        description: "With in-house data centers, we provide secure, PCI-compliant hosting which is supported by experienced staff members 24/7/365."
    },
    {
        icon: iconia,
        title: "Artificial intelligence consulting",
        description: "Automate tasks, solve tough problems, and streamline your business processes. We have in-depth knowledge of artificial intelligence and machine learning solutions."
    },
    {
        icon: iconserviceclient,
        title: "Customer services",
        description: "We work with you to maintain your site after launch, with dedicated support to ensure your business goals are met."
    },
    {
        icon: iconformation,
        title: "Technological training",
        description: "Take advantage of the latest technology. Our team of experts will give you the skills you need to succeed with Sitefinity, SmartBear, Microsoft Azure and more."
    },

]

const Home: React.FC = () => (
    <div>
        <Banner></Banner>
        <div className="container-fluid">
            <div className="row device-row d-flex align-items-center justify-content-center">
                <div className="expertise-title">
                    By Using Our Expertise, <br />
                    We help you archieve your dream
               </div>
                <div className="div-letf-dot"></div>
            </div>
        </div>

        <div className="services-row container-fluid">
            <div className="row pt-5">
                {serviceData.map((data) => (
                    <div className="col-md-3">
                        <ServiceCard
                            icon={data.icon}
                            title={data.title}
                            description={data.description}
                        >
                        </ServiceCard>
                    </div>
                ))}

            </div>
            <DividerVertical></DividerVertical>
        </div>

        <div className="footer">
            <DividerVertical></DividerVertical>
            <div className="container pb-4 pt-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="pb-5">Working to build your success</h1>
                        <p style={{ color: "#80889B;", fontSize: "15px" }}>
                            Foer over 5 years, baobabGroup.com is dedicated2 to providing best-in-class web design, development, hosting, and digital marketing services. With us, your success is our success and we work with you to find powerful online solutions that fit your needs.
                     </p>
                    </div>
                    <div className="col-md-6">
                        <img src={phonebuild2} alt="logo" style={{ width: "100%" }} className="pt-5 pb-3" />
                        <p style={{ color: "#80889B;", fontSize: "15px" }}>
                            <button className="btn btn-more w-100">More About Us</button>
                        </p>
                    </div>

                </div>

            </div>
            <DividerVertical></DividerVertical>
        </div>

        <div className="realisations">
            <DividerVertical></DividerVertical>
            <div className="container  pt-5 pb-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-start">
                    <div className="col-md-4">
                        <h1 style={{ color: "black" }} className="title">Our reputation is important</h1>
                        <div className="divider"></div>
                        <p className="mt-2 pt-4" style={{color:"black"}}>We've helped a wide variety of clients, from start-ups to Fortune 500 companies, in all industries, achieve measurable online results. </p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="app-card">
                                    <img style={{ width: "100%" }} src="https://www.kevmax.com/min/portfolio/beauteadom%20shop/web%20et%20mobile.jpg" alt="img" />
                                    <div className="app-card-content">
                                        <h1>Beauté admom</h1>
                                        <p>site de vente en ligne</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="app-card">
                                    <img style={{ width: "100%" }} src="https://www.kevmax.com/min/portfolio/kema/web%20et%20mobile.jpg" alt="img" />
                                    <div className="app-card-content">
                                        <h1>Kema shop</h1>
                                        <p>site de vente en ligne</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="app-card">
                                    <img style={{ width: "100%" }} src="https://www.kevmax.com/min/portfolio/nearestplaces.jpg" alt="img" />
                                    <div className="app-card-content">
                                        <h1>NearsBy</h1>
                                        <p>Application mobile</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="app-card">
                                    <img style={{ width: "100%" }} src="https://www.kevmax.com/min/portfolio/service/web%20et%20mobile.jpg" alt="img" />
                                    <div className="app-card-content">
                                        <h1>Yomoove</h1>
                                        <p>site internet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="app-card">
                                    <img style={{ width: "100%" }} src="https://www.kevmax.com/min/portfolio/service/web%20et%20mobile.jpg" alt="img" />
                                    <div className="app-card-content">
                                        <h1>Yomoove</h1>
                                        <p>site internet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="app-card">
                                    <img style={{ width: "100%" }} src="https://www.kevmax.com/min/portfolio/service/web%20et%20mobile.jpg" alt="img" />
                                    <div className="app-card-content">
                                        <h1>Yomoove</h1>
                                        <p>site internet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <DividerVertical></DividerVertical>
        </div>

    </div>
);

export default Home;