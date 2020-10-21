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
import team from '../../images/team.jpg';
import seremoApp from '../../images/seremo.png';
import lugginApp from '../../images/luggin.png';
import OuiCaring from '../../images/ouiCaring.png';
import beauteAdom from '../../images/beauteAdom.png';
import consoInvest from '../../images/consoInvest.png';
import hqseShop from '../../images/hqseShop.png';


import './Home.css';
import { DividerVertical } from '../../components/dividerVertical/DividerVertical';
import AppPresentationCard from '../../components/appPresentationCard/AppPresentationCard';

var serviceData = [
    {
        icon: iconweb,
        title: "Web & mobile development",
        description: "We build award-winning websites and mobile applications built to deliver value and results. Our end product to personalized for your unique demand"
    },
    {
        icon: icondesign,
        title: "Experience Design",
        description: "Our well versed UX designers create visually impressive and functional online experiences that are designed with your audience in mind."
    },
    {
        icon: iconmarketing,
        title: "Digital Marketing",
        description: "Through SEO, content, email marketing, Facebook ads and more we develop strategies that grow your business and provide high visibility to the world."
    },
    {
        icon: iconstrategy,
        title: "Strategy &amp; Insights",
        description: "Through in-depth research and analysis, our team of web experts build a bespoke digital strategy that matches your brand."
    },
    {
        icon: iconhosting,
        title: "Hosting &amp; Security",
        description: "With global partners, we design infrastructure with the highest standards for privacy and data security."
    },
    {
        icon: iconia,
        title: "Artificial intelligence consulting",
        description: "We help organizations leverage machine learning technologies and build breakthrough AI products. We help you be nimble, smart, and fast in your decision making process."
    },
    {
        icon: iconserviceclient,
        title: "Client Services",
        description: "We work with you to maintain your site after it launches, with dedicated support to make sure business goals are being met."
    },
    {
        icon: iconformation,
        title: "Technology Training",
        description: "Our team of experts will give you the skills you need to self administer your system. AWS, Microsoft Azure, google cloud, ITIL4."
    },

];

var mobileAppData = [
    { img: seremoApp, title: "Seremoworld", description: "Money transfer app", link: "link" },
    { img: lugginApp, title: "LuggIn", description: "Travel app", link: "link" },
    { img: OuiCaring, title: "OuiCaring", description: "Care App", link: "link" },
    { img: beauteAdom, title: "Beaute Adom", description: "Beauty App", link: "link" },
    { img: consoInvest, title: "ConsoInvest", description: "Shop App", link: "link" },
    { img: hqseShop, title: "Hqse-Shop", description: "Care App", link: "link" },
];


var webApp = [
    { img: "https://www.kevmax.com/min/portfolio/origame/new.jpg", title: "Origame", description: "Money transfer app", link: "link" },
    { img: "https://www.kevmax.com/min/portfolio/beauteadom/web%20et%20mobile.jpg", title: "beauteadom", description: "Travel app", link: "link" },
    { img: "https://www.kevmax.com/min/portfolio/nyanga/neww.jpg", title: "Nyanga", description: "Care App", link: "link" },
    { img: "https://www.kevmax.com/min/portfolio/youmoove_school/new.jpg", title: "Youmoove Etudiant", description: "Beauty App", link: "link" },
    { img: "https://www.kevmax.com/min/portfolio/beauteadom%20shop/web%20et%20mobile.jpg", title: "BeauteAdom Shop", description: "Shop App", link: "link" },
    { img: "https://www.kevmax.com/min/portfolio/kema/web%20et%20mobile.jpg", title: "Kema shop", description: "Care App", link: "link" },
];


const Home: React.FC = () => (
    <div>
        <Banner></Banner>
        <div className="container-fluid">
            <div className="row device-row  p-2 d-flex align-items-center justify-content-center">
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
                            For over 5 years, baobabGroup.com is dedicated to providing best-in-class web design, development, hosting, and digital marketing services. With us, your success is our success and we work with you to find powerful online solutions that fit your needs.
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

        <div className="footer" style={{ backgroundColor: "#E3F1FC" }}>
            <DividerVertical></DividerVertical>
            <div className="container pb-4 pt-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={team} alt="logo" style={{ width: "100%" }} className="pt-5 pb-3" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="pb-5">A Professional &amp; Hard Working team</h1>
                        <p style={{ color: "#80889B;", fontSize: "15px" }}>
                            Partnering with a family-owned, industry leader with a sole focus on helping
                            customers grow and achieve success is a winning combination. The team at
                            baobagroup.com understands that each client has a different story and unique
                            digital goals. Regardless of business size, industry, or technology.
                     </p>
                        <p style={{ color: "#80889B;", fontSize: "15px" }}>
                            our talented team has a proven track record of delivering exciting, high-
                            performing digital solutions that produce positive results for businesses across
                            the globe.
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
                    <div className="col-md-12">
                        <h1 style={{ color: "black" }} className="title">Web &amp; <br /> Application Development</h1>
                        <p className="mt-2 pt-2 pb-5" style={{ color: "black" }}> Our website development services are tailored to deliver value for your business. From simple platform implementations to complete redesigns, we bring multiple teams together to build a solution that works for you. </p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {webApp.map((data) => (
                                <div className="col-md-4">
                                    <AppPresentationCard image={data.img} title={data.title} description="" link="" ></AppPresentationCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="realisations">
            <div className="container pt-5 pb-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-start">
                    <div className="col-md-12">
                        <h1 style={{ color: "black" }} className="title">Mobile Application <br/> Android & Ios </h1>
                        <p className="mt-2 pt-1 pb-5" style={{ color: "black" }}> Our website development services are tailored to deliver value for your business. From simple platform implementations to complete redesigns, we bring multiple teams together to build a solution that works for you. </p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {mobileAppData.map((data) => (
                                <div className="col-md-4">
                                    <AppPresentationCard image={data.img} title={data.title} description={data.description} link="" ></AppPresentationCard>
                                </div>
                            ))};
                        </div>
                    </div>
                </div>
            </div>

            <DividerVertical></DividerVertical>
        </div>
    </div>
);

export default Home;