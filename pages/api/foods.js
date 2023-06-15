import React from 'react'
import { initMongoose } from '../../lib/mongoose'
import Food from '../../models/food'


export default async function handle(req,res) {

    await initMongoose()
    res.json(  await Food.find().exec() )
  return (
    <div>Foods</div>
  )
}
