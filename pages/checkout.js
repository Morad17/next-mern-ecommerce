import React, { useContext, useState, useEffect } from 'react'
import { FoodsContext } from '../components/foodContext'

export default function checkout() {

  const { selectedFoods, setSelecedfoods }  = useContext(FoodsContext)
  const [foodsInfo, setFoodsInfo] = useState([])
 
  useEffect(()=> {
    console.log(selectedFoods)
    const uniqueIds = [...new Set(selectedFoods)]
    
    fetch('/api/foods?ids='+uniqueIds.join(','))
    .then(res => res.json())
    .then(json => setFoodsInfo(json))
  }, [])

  return (
    <div>
      {!foodsInfo.lengh && (
        <div className="">Your Basket Is Empty</div>
      )}
      {foodsInfo.length && foodsInfo.map(food=> (
        <div className="">
          {food.name}
        </div>
      ))

      }
    </div>
  )
}
