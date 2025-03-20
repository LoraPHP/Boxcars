import React from 'react';
import './GeneralInfo.css';

export default function GeneralInfo() {
    return (
        <div>
            <div className="info-grid">
                <div className='electric-vehicles'>
                    <h1>Why Electric Vehicles?</h1>
                    <p>We are committed to providing our customers with exceptional
                    service, competitive pricing, and a wide range of.</p>
                    <button> 
                        <span>Get Started</span>
                        <img src="./assets/get-started-icon.svg" alt="arrow" /> 
                    </button>
                </div>
                <div className='company-facts'>
                    <img src="./assets/fact1.svg" alt="icon" />
                    <h4>Special Financing Offers</h4>
                    <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
                </div>
                <div className='company-facts'>
                    <img src="./assets/fact2.svg" alt="icon" />
                    <h4>Trusted Car Dealership</h4>
                    <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
                </div>
                <div className='company-facts'>
                    <img src="./assets/fact3.svg" alt="icon" />
                    <h4>Transparent Pricing</h4>
                    <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
                </div>
                <div className='company-facts'>
                    <img src="./assets/fact4.svg" alt="icon" />
                    <h4>Expert Car Service</h4>
                    <p>Our stress-free finance department that can
                    find financial solutions to save you money.</p>
                </div>
            </div>
            <div className="general-stats">
                <div className="stat-block">
                    <span>836M</span>
                    <p>CARS FOR SALE</p>
                </div>
                <div className="stat-block">
                    <span>738M</span>
                    <p>DEALER REVIEWS</p>
                </div>
                <div className="stat-block">
                    <span>100M</span>
                    <p>VISITORS PER DAY</p>
                </div>
                <div className="stat-block">
                    <span>238M</span>
                    <p>VERIFIED DEALERS</p>
                </div>
            </div>
        </div>
        
    )
}