import React from "react";
import { useState, useEffect } from "react";
import "./Testimonials.css";
import ReviewCard from "./ReviewCard";
import reviewData from '../../data/reviewData';

export default function Testimonials() {
    const reviews = reviewData.map(review => <ReviewCard key={review.id} title={review.title} review={review.review} img={review.img} name={review.name} job={review.job} />)
    const [nrShownReviews, setNrShownReviews] = useState(3);

    const [currentIndex, setCurrentIndex] = useState(0);

    const updateShownReviews = () => {
        if (window.innerWidth < 768) {
            setNrShownReviews(1);
        } else if (window.innerWidth < 1024) {
            setNrShownReviews(2);
        } else {
            setNrShownReviews(3);
        }
    };

    // Set up the event listener to track window resizing
    useEffect(() => {
        updateShownReviews(); // Call once on component mount

        window.addEventListener('resize', updateShownReviews);
        
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', updateShownReviews);
    }, []);

    
    
    const handlePrevClick = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
    };
      
    const handleNextClick = () => {
        if (currentIndex < reviews.length - nrShownReviews) {
          setCurrentIndex(currentIndex + 1);
        }
    };
    
    return (
        <section className="testimonial-section">
            <h1>What Our Customers Say</h1>
            <ul className="testimonial-list">
                {reviews.slice(currentIndex, currentIndex + nrShownReviews)}
            </ul>
            <div className="testimonial-buttons">
                <button className="navigation-button" onClick={handlePrevClick}> <img src="./assets/prev-icon.png"/> </button>
                <button className="navigation-button" onClick={handleNextClick}> <img src="./assets/next-icon.png"/> </button>
            </div>
        </section>

    )
}