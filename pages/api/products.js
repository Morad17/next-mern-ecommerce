import React from 'react'
import { initMongoose } from '../../lib/mongoose'
import Product from '../../models/product'


export default async function handle(req,res) {

    await initMongoose()
    res.json(  await Product.find().exec() )
  return (
    <div>products</div>
  )
}
