import mongoose,{ Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    cost: Number,
    calorie: String,
    nutrition100g: {
        carbohydrade: Number,
        fat: Number ,
        protein: Number ,
        salt: Number ,
        sugars: Number ,

    },
    allegens: Array
})

const Product = mongoose.models?.Product  || mongoose.model('Product', ProductSchema)

export default Product