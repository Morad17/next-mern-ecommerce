import Image from 'next/image'
import React, { useContext} from 'react'
import { FoodsContext, } from './foodContext'

export default function foodsCard({
    food: {_id, name, description, cost, calorie, nutrition100g, ingredients, allegens, image, 
        foodType, subCategories}
}) {

    const { setSelectedFoods } = useContext(FoodsContext)

    function addFood() {
        setSelectedFoods(prev => [...prev, _id])
    }

  return (
    <div className="food-card">
        <h2 className="card-title">{name}</h2>
        <div className="card-image">
          <Image width={300} height={200} src={`/assets/images/${image}`} className="card-image" alt="food-image" />
        </div>
        
        
        <div className="card-details">
            <div className="card-nutrition">
              <ul className="card-keys">
                <h3 className="keys bold">Typical values</h3>
                <p className="keys">carbohydrate:</p>
                <p className="keys">fat:</p>
                <p className="keys">protein:</p>
                <p className="keys">salt:</p>
                <p className="keys">sugars</p>
              </ul>
              <ul className="card-values">
                <h3 className="values bold">Per 100g</h3>
                <p className="values">{ nutrition100g.carbohydrate}</p>
                <p className="values">{ nutrition100g.fat}</p>
                <p className="values">{ nutrition100g.protein}</p>
                <p className="values">{ nutrition100g.salt}</p>
                <p className="values">{ nutrition100g.sugars}</p>
              </ul>
            </div>
            
            <div className="card-ingredients-allegens">
                <h3>Ingredients</h3>
                <div className="ingredients">
                    {ingredients.map((i, key) => { return <p className="ingredient" key={key}>{i},</p>} )}
                </div>
                <h3>Allegens</h3>
                <div className="allegens">
                    {allegens.map((a, key) => { return <p className="allegen" key={key}>{a},</p>} )}
                </div>
            </div>
        </div>
        <div className="card-description">
        <p className="bold">{description}</p>
        </div>
        <div className="card-cost">
          <p className="bold">{cost}</p>
          <button onClick={addFood}>Buy</button>
        </div>
    </div>
  )
}
