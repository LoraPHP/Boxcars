import React, { useState } from "react"
import "./Featured.css"
import Card from './Card'
import carData from '../../data/featuredCarData'


export default function Featured() {
	const cars = carData.map(car => <Card key={car.id} img={car.img} car={car.car} details={car.details} price={car.price} />)
	// const handleSelect = (e) => {
	// 	const filters = document.querySelectorAll('.filters li')
	// 	filters.forEach(filter => filter.classList.remove('selected'))
	// 	e.target.parentElement.classList.add('selected')
	// }
	const [currentSegment, setCurrentSegment] = useState('In Stock')

	const handleSelect = (e) => {
		setCurrentSegment(e.target.innerText)
	}
	const segmentNames = ['In Stock', 'New Cars', 'Used Cars']
	const segments = segmentNames.map(segment => 
		<li key={segment} 
			onClick={handleSelect}
			className={currentSegment===segment ? "selected" : ""}>
				<a data-href="#">{segment}</a>
		</li>)
	

	return (
		<section className='featured-section'>
			<h1>Featured Listings</h1>
			<ul className="filters">
				{segments}
			</ul>
			<div className="featured-cars">
			{cars}
			</div>
		</section>
	)
}