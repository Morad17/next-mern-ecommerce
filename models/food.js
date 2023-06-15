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
    foodType: String,
    subCategories: Array,

})

const Food = mongoose.models?.Food  || mongoose.model('foods', FoodSchema)

export default Food