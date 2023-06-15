import mongoose,{ Schema } from "mongoose";

const FoodSchema = new Schema({
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
    image: String,
    foodType: String,
    subCategories: Array,

})

const Food = mongoose.models.Food  || mongoose.model('Food', FoodSchema)

export default Food