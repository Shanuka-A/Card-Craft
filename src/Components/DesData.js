import React from "react";
import "../Components/CSS/DesDataStyle.css";

const DesData = ({ className, heading, price, text, img1, img2 }) => {
    return (
        <div className={`${className} des-data`}>
            <div className="des-text">
                <h2>{heading} <br /> {price}</h2>
                <p>{text}</p>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img alt="Front" src={img1} />
                    </div>
                    <div className="flip-card-back">
                        <img alt="Back" src={img2} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesData;
