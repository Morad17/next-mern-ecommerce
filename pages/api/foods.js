import React from 'react'
import { initMongoose } from '../../lib/mongoose'
import Food from '../../models/food'

export async function findAllFoods() {
  return Food.find().exec()
}


export default async function handle(req,res) {

    await initMongoose()
    const {ids} = req.query
    if (ids){
      const idsArray = ids.split(',')
      res.json(await Food.find({'_id':{$in:idsArray}}).exec())
    } else {
      res.json(await findAllFoods() )
    }
    
  return (
    <div>Foods</div>
  )
}
