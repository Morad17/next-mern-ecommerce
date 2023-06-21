import React, { useContext, useState, useEffect } from 'react'
import { FoodsContext } from '../components/FoodContext'
import CheckoutFoodCard from '../components/CheckoutFoodCard'

export default function checkout() {

  const { selectedFoods }  = useContext(FoodsContext)
  const [foodsInfo, setFoodsInfo] = useState([])
 
  useEffect(()=> {
    console.log(selectedFoods)
    const uniqueIds = [...new Set(selectedFoods)]
    
    //Sets all basket Item Id's into an array //
    fetch('/api/foods?ids='+uniqueIds.join(','))
    .then(res => res.json())
    .then(json => setFoodsInfo(json))
  }, [])

  return (
    <div className="checkout">
      {/*--If no Items in the basket--*/}
      {!foodsInfo.length && (
        <div className="">Your Basket Is Empty</div>
      )}
      <section className="food-items-section">
         <div className="">
          <h1>My Bag</h1>
          </div>
          { /*--Display all Items in the basket--*/
          foodsInfo.length && foodsInfo.map( (food, k) => (
            <CheckoutFoodCard 
              foodsInfo={foodsInfo} 
              food={food}
              key={k}
            />
          ))}
        <div className="">
          <h2>Sub Total</h2>
        </div>
      </section>
      <section>
        <div className="totals-section">
          <h2>Total</h2>
          <hr />
          <h3>
            Subtotal
          </h3>
          <h3>Delivery</h3>
          <button>Buy Now</button>
        </div>
      </section>
     
    </div>
  )
}
