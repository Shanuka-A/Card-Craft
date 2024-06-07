import React from 'react'
import "../Components/CSS/TripStyle1.css"

export default function Tripdata1(props) {
  return (
    <div className="t-card1">
        <div className="t-image1">
            <img src={props.image} alt="image"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>

    </div>
  )
}
