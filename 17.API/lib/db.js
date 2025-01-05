import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }

    catch (error) {
        console.log(error.message);
        process.exit(1);  // Exit the process with a non-zero status code
    }
}

export default connectDB