import React from "react";
import "./Footer.css";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Get in Touch</a></li>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Live chat</a></li>
                        <li><a href="#">How it works</a></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h3>Our Brands</h3>
                    <ul>
                        <li><a href="#">Toyota</a></li>
                        <li><a href="#">Porche</a></li>
                        <li><a href="#">Audi</a></li>
                        <li><a href="#">BMW</a></li>
                        <li><a href="#">Ford</a></li>
                        <li><a href="#">Nissan</a></li>
                        <li><a href="#">Peugeot</a></li>
                        <li><a href="#">Volkswagen</a></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h3>Vehicle Type</h3>
                    <ul>
                        <li><a href="#">Sedan</a></li>
                        <li><a href="#">Hatchback</a></li>
                        <li><a href="#">SUV</a></li>
                        <li><a href="#">Hybrid</a></li>
                        <li><a href="#">Electric</a></li>
                        <li><a href="#">Coupe</a></li>
                        <li><a href="#">Truck</a></li>
                        <li><a href="#">Convertible</a></li>
                    </ul>
                </div>

                <div className="footer-info">
                    <h3>Sale Hours</h3>
                    <ul>
                        <li><a href="#">Monday - Friday: 09:00AM - 09:00 PM</a></li>
                        <li><a href="#">Saturday: 09:00AM - 07:00PM</a></li>
                        <li><a href="#">Sunday: Closed</a></li>
                    </ul>
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <a href="#"><img src="/assets/social1.png" alt="Facebook" /></a>
                        <a href="#"><img src="/assets/social2.png" alt="Twitter" /></a>
                        <a href="#"><img src="/assets/social3.png" alt="Instagram" /></a>
                        <a href="#"><img src="/assets/social4.png" alt="LinkedIn" /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>&copy; 2024 example.com. All Rights Reserved.</p>
                <span>Terms&Conditions&nbsp;&nbsp;•&nbsp;&nbsp;Privacy Notice</span>
            </div>
        </footer>
    )
}