import mongoose, { Schema} from "mongoose";

const foodTypesSchema = new Schema({
    name: String,
})

const FoodTypes = mongoose.models.FoodTypes || mongoose.model('foodTypes', foodTypesSchema)