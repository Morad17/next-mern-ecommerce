import { useEffect, useState } from "react"
import FoodCard from '../components/foodCard'


export default function allFoods() {

const [foodsInfo, setFoodsInfo ] = useState(null)
const [loading, isLoading ] = useState(true)

useEffect(()=> { 
    fetch('http://localhost:3000/api/foods')
    .then(response => response.json())
    .then(json => setFoodsInfo(json))
    .catch((err) => {
        console.log(err);
    })
}, [])
console.log(foodsInfo);

// const foodsCategories = foodsInfo?.map(f => f.foodType)
// console.log(foodsCategories);

  return (
    <div>
        { foodsInfo ? foodsInfo.map( (food, key) => {return <FoodCard food={food} key={key}/>}) : <p>Food</p> }
    </div>
  )
}
