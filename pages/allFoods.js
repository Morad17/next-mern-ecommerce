import { useEffect, useState } from "react"
import FoodsCard from '../components/FoodsCard'
import { initMongoose } from "../lib/mongoose"
import { findAllFoods } from "./api/foods"


export default function allFoods({foods}) {

const [foodTypes, setFoodTypes ] = useState(null)
const [loading, isLoading ] = useState(true)




const foodsCategories = foods?.map(f => f.foodType)
console.log(foodsCategories);

  return (
    <div>
        { foods ? foods.map( (food, key) => {return <FoodsCard food={food} key={key}/>}) : <p>Food</p> }
    </div>
  )
}

export async function getServerSideProps() {
  await initMongoose();

  const foods = await findAllFoods()

  return {
    props: {
      foods: JSON.parse(JSON.stringify(foods))
    }
  }
}