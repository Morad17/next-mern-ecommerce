import { useEffect, useState } from "react"
import FoodsCard from '../components/FoodsCard'
import { initMongoose } from "../lib/mongoose"
import { findAllFoods } from "./api/foods"
import { useContext } from "react"
import { FoodsContext } from "../components/foodContext"


export default function allFoods({foods}) {

const { selectedFoods } = useContext(FoodsContext)


const foodsCategories = foods?.map(f => f.foodType)
console.log(foodsCategories);

  return (
    <div>
        { foods.map( (food, key) => {return <FoodsCard food={food} key={key}/>})}
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