import mongoose,{ Schema } from "mongoose";

const FoodsSchema = new Schema({
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
    allegens: Array,
    foodType: String,
    subCategories: Array,

})

const Foods = mongoose.models?.Product  || mongoose.model('Foods', FoodsSchema)

export default Foods