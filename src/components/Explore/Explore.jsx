import React from "react"
import "./Explore.css"
import brandData from '../../data/premiumBrandsData'
import typeData from '../../data/carTypeData'
import carsData from "../../data/carsData"
import Card from '../Featured/Card'

import { useState } from "react"

export default function Explore(props) {
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedType, setSelectedType] = useState("");


    const brands = brandData.map(({id, img, brand}) =>
        <li key={id} 
            onClick={() => setSelectedBrand(brand)}
            className={selectedBrand === brand ? "selected" : ""}
        >
            <img src={img}  alt={`${brand} logo`}/>
            <h5>{brand}</h5>
        </li>)
    const types = typeData.map(({id, img, type}) =>
        <li key={id}
            onClick={() => setSelectedType(type)}
            className={selectedType === type ? "selected" : ""}>
            <img src={img}  alt={`${type} logo`}/>
            <h5>{type}</h5>
        </li>)

    const filteredCars = selectedType ? carsData.filter(car => car.type === selectedType) : []
    const cars = filteredCars.map(car => <Card key={car.id} img={car.img} car={car.car} details={car.details} price={car.price} />)

    return (
        <div className="explore-section">
            <h1>Browse by Type</h1>
            <ul className="type-list">
                {types}
            </ul>

            <div className="card-list">
                {cars}
            </div>

            <h1>Explore Our Premium Brands</h1>
            <ul className="brand-list">
                {brands}
            </ul>

            


        </div>
        
    )
}