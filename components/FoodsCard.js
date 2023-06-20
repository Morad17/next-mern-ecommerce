import Image from 'next/image'
import React from 'react'

export default function foodsCard({
    food: {id, name, description, cost, calorie, nutrition100g, allegens, image, 
        foodType, subCategories}
}) {

  return (
    <div className="food-card">
        <h2 className="card-title">{name}</h2>
        <div className="card-image">
          <Image width={300} height={200} src='/assets/images/pancakes.jpg' className="card-image" alt="food-image" />
        </div>
        
        <p className="card-description bold">{description}</p>
        <div className="card-details">
            <div className="card-nutrition">
              <ul className="card-keys">
                <p className="keys bold">Typical values</p>
                <p className="keys">carbohydrate:</p>
                <p className="keys">fat:</p>
                <p className="keys">protein:</p>
                <p className="keys">salt:</p>
                <p className="keys">sugars</p>
              </ul>
              <ul className="card-values">
                <p className="values bold">Per 100g</p>
                <p className="values">{ nutrition100g.carbohydrate}</p>
                <p className="values">{ nutrition100g.fat}</p>
                <p className="values">{ nutrition100g.protein}</p>
                <p className="values">{ nutrition100g.salt}</p>
                <p className="values">{ nutrition100g.sugars}</p>
              </ul>
            </div>
            
            {/* <div className="card-allegens">{allegens}</div> */}
        </div>
        <div className="card-cost">
          <p className="bold">Cost</p>
          <p className="bold">{cost}</p>
        </div>
        .buy
    </div>
  )
}
