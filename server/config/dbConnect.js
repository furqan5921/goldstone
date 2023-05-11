import mongoose from "mongoose";


const dbConnect = () => {
    try {
        console.log("db connect")
        return mongoose.connect(process.env.DB_URL)
    } catch (err) {
        console.log("db connect error: " + err)
    }
}

export default dbConnect