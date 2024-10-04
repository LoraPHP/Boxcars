import React from "react"
import "./Card.css"
import link_logo from "/assets/link-logo.svg?url"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image" />
            <div className="card-info">
              <h3>{props.car}</h3>
              <p>{props.details}</p>
              <p>{props.price}</p>
              <div className="details">
                <a href="#">View Details </a>
                <img src={link_logo} className="link-logo" />
              </div>
            </div>
        </div>
        
    )
}