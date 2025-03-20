import React from "react";
import "./ReviewCard.css";

export default function ReviewCard(props) {
    return (
        <div className="review-card">
            <div className="review-title">
                <h3>{props.title}</h3>
                <img src="./assets/review-icon.png" alt="Quotation marks"/>   
            </div>
            
            <p>{props.review}</p>
            
            <div className="reviewer">
                <img src={props.img} className="review-image" />
                <div className="reviewer-description">
                    <h3>{props.name}</h3>
                    <p>{props.job}</p>
                </div>
            </div>
        </div>
    )
}