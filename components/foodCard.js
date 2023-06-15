import React from 'react'

export default function productCard({
    product: {id, name, description, cost, calorie, nutrition100g, allegens, image, 
        foodType, subCategories}
}) {


  return (
    <div className="productCard">
        <h2 className="card-title">{name}</h2>
        <image className="card-image">{image}</image>
        <p className="card-description">{description}</p>
        <div className="card-details">
            <p className="card-nutrition">
                {nutrition100g}
            </p>
            <div className="card-allegens">{allegens}</div>
        </div>
        <div className="card-cost">{cost}</div>
    </div>
  )
}
