import { useEffect, useState } from "react"
import FoodCard from '../components/foodCard'
import { initMongoose } from "../lib/mongoose"
import { findAllFoods } from "./api/foods"


export default function allFoods() {

const [foodsInfo, setFoodsInfo ] = useState(null)
const [foodTypes, setFoodTypes ] = useState(null)
const [loading, isLoading ] = useState(true)

const getAllFoods = ({}) => {
  fetch('http://localhost:3000/api/foods')
    .then(response => response.json())
    .then(json => setFoodsInfo(json))
    .catch((err) => {
        console.log(err);
    })
}

// const getAllFoodTypes = () => {
//   fetch('http://localhost:3000/api/foodCategories')
//   .then(res => res.json())
//   .then(json => setFoodTypes(json))
//   .catch((err) => {
//     console.log(err);
//   })
// }

useEffect(()=> { 
    getAllFoods()
    // getAllFoodTypes()

}, [])
console.log(foodsInfo);

const foodsCategories = foodsInfo?.map(f => f.foodType)
console.log(foodsCategories);

  return (
    <div>
        { foodsInfo ? foodsInfo.map( (food, key) => {return <FoodCard food={food} key={key}/>}) : <p>Food</p> }
    </div>
  )
}

export async function getServerSideProps() {
  await initMongoose();

  const foods = await findAllFoods()

  return {
    props: {
      products: JSON.parse(JSON.stringify(foods))
    }
  }
}