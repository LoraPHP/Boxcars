import React from "react"
import "./Explore.css"
import brandData from '../../data/premiumBrandsData'
import typeData from '../../data/carTypeData'

export default function Explore(props) {
    const brands = brandData.map(({id, img, brand}) =>
        <li key={id}>
            <img src={img}  alt={`${brand} logo`}/>
            <h5>{brand}</h5>
        </li>)
    const types = typeData.map(({id, img, type}) =>
        <li key={id}>
            <img src={img}  alt={`${type} logo`}/>
            <h5>{type}</h5>
        </li>)
    return (
        <div className="explore-section">
            <h1>Browse by Type</h1>
            <ul className="type-list">
                {types}
            </ul>
            <h1>Explore Our Premium Brands</h1>
            <ul className="brand-list">
                {brands}
            </ul>

        </div>
        
    )
}