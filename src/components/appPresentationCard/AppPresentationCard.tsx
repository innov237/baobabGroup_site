import React from 'react';

type Props = {
    image: string,
    title: string,
    description: string,
    link: string,
}

const AppPresentationCard: React.FC<Props> = ({ image, title, description, link }) => (

    <div className="app-card">
        <img style={{ width: "100%" }} src={image} alt="img" />
        <div className="app-card-content">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className="mt-2 bg-col d-flex align-items-center justify-content-center"><p>Visit</p></div> <br />
    </div>

);

export default AppPresentationCard;