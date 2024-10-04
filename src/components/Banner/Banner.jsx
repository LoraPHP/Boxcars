import React from "react"
import logo from "/assets/logo.png?url"
import search_icon from "/assets/search-icon.svg?url"
import "./Banner.css"

import Slider from "react-slider";
import { useState } from "react";

const MIN = 0;
const MAX = 250000;

export default function Banner() {
    const [values, setValues] = useState([MIN, MAX]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState("New");

    const setSelect = (e) => {
		setSelected(e.target.innerText)
	}

    return(
        <div className="banner">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="menu">
                    <img src="/assets/menu.svg" alt="Menu icon" onClick={() => setMenuOpen(!menuOpen)}/>
                </div>
                <nav className={menuOpen ? "open" : ""}>
                    <ul className="nav-items">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Listings</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Pages</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                        <li>
                            <a href="#"><button>Submit Listing</button></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1 className="motto">Let’s Find Your Perfect Car</h1>
            <div className="search-section">
                <div className="search-buttons">
                    <button className={selected==="New" ? "new-button selected" : "new-button"}
                            onClick={setSelect}>New</button>
                    <button className={selected==="Used" ? "used-button selected" : "used-button"}
                            onClick={setSelect}>Used</button>
                </div>

                <select name="makes" id="makes">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <select name="models" id="models">
                    <option value="q7">Q7</option>
                </select>
                <div className="price-range">
                    <span className="subtitle">Select Price</span>
                    <Slider className="slider" 
                            onChange={setValues}
                            value={values} 
                            min={MIN} 
                            max={MAX}/>
                    <div className="selected-values">
                        <span className="price-value"> ${values[0]} </span>
                        <span className="price-value"> ${values[1]} </span>
                    </div>
                    
                </div>
                <button className="search-button">
                    <img src={search_icon} />
                    <span>Search</span>
                </button>
            </div>
        </div>
    )
}