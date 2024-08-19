import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://komeshan002:123Komeshan!123@cluster0.cjsiwfy.mongodb.net/food-del').then(() => console.log('DB connected'))
}