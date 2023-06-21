import Image from 'next/image'
import { FoodsContext } from './FoodContext'
import React, {useContext} from 'react'

export default function CheckoutFoodCard({ foodsInfo,
    food: {_id, name, description, cost, calorie, nutrition100g, ingredients, allegens, image, 
        foodType, subCategories}
}) {

    const { selectedFoods, setSelectedFoods }  = useContext(FoodsContext)

    function incrementFood(id) {
        
        setSelectedFoods(prev => [...prev, id])
        console.log(selectedFoods);
    }
    function decrementFood(id) {
        const pos = selectedFoods.indexOf(id)
        if (pos !== -1) {
            setSelectedFoods(
                prev => { return prev.filter((value, index) => index !== pos)})
        }
        console.log(selectedFoods);
    }
    
  return (
    <div className="checkout-food-card">
        <div className="checkout-image">
            <Image width={300} height={200} alt={image} src={`/assets/images/${image}`}/>
        </div>
        <div className="checkout-info">
             <h2 className="checkout-title">
            {name}
            </h2>
            <hr />
            <p className="checkout-description">
                {description}
            </p>
            <p className="checkout-price">
                {cost }
            </p>
            <div className="checkout-controls">
                <div className=""></div>
                <div className="controls-toggle">
                    <button className="increase" onClick={()=> incrementFood(foodsInfo._id)}>+</button>
                    <p className="checkout-control-display">
                        {selectedFoods.filter((id) => id === foodsInfo).length}
                    </p>
                    <button className="decrease" onClick={() => decrementFood(foodsInfo._id)}>-</button>
                </div>
                <div className="">
                    <button>Delete</button>
                </div>
                
            </div>
            

        </div>
       
        

    </div>
  )
}
