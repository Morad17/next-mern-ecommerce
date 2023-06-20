import React from 'react'
import { initMongoose } from '../../lib/mongoose'
import Food from '../../models/food'

export async function findAllFoods() {
  return Food.find().exec()
}


export default async function handle(req,res) {

    await initMongoose()
    res.json(  await findAllFoods() )
  return (
    <div>Foods</div>
  )
}
