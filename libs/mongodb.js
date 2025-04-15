import mongoose from "mongoose";

const connectMongoDb = async() =>{
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected");
        console.log("Mongo URI:", process.env.MONGODB_URI);

    } catch(error){
        console.log(error)
    }
}

export default connectMongoDb;