import "../Components/CSS/TripStyle.css";
import React from 'react';
import Tripdata from "./Tripdata";
import Trip1 from "../Assets/lotus.jpg"
import Trip2 from "../Assets/meemure.jpg"
import Trip3 from "../Assets/riverston.jpg"

export default function Trip() {
    return (
        <div className="trip">
            <h1>Feedbacks</h1>
            {/* <p>You have the opportunity to explore every corner of Sri Lanka.</p> */}
            <div className="tripcard">
                <Tripdata
                    // image={Trip1}
                    heading="Trip to Lotus Tower"
                    text="dummy"
                />

                <Tripdata
                    // image={Trip2}
                    heading="Trip to Meemure "
                    text="dummy."
                />

                <Tripdata
                    // image={Trip3}
                    heading="Trip to Riverston"
                    text="dummy."
                />
            </div>
        </div>
    )
}
