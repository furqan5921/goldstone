import { Schema, model } from "mongoose"


const userSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
}, {
    timestamps: true,
    versionKey: false
})

const User = model("User", userSchema)

export default User