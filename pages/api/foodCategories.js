import React from 'react'
import { initMongoose } from '../../lib/mongoose'
import FoodTypes from'../../models/foodTypes'


export default async function handle(req,res) {

    await initMongoose()
    res.json( await FoodTypes.find().exec())
  return (
    <div>foodTypes</div>
  )
}
