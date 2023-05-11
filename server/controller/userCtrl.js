import User from "../models/userModel.js"
import fetch from "node-fetch"
const getUsers = async (req, res) => {

    try {
        const users = await User.find()
        if (users) {
            res.status(200).send(users)
        }
        else {

            const users = await fetch("https://gorest.co.in/public-api/users")
            const { data } = await users.json()
            for (let i = 0; i < data.length; i++) {
                const user = new User({
                    id: data[i]["id"],
                    name: data[i]["name"],
                    email: data[i]["email"],
                    gender: data[i]["gender"],
                    status: data[i]["status"],
                })
                user.save()
            }
            res.send(data);
        }
    } catch (e) {
        res.send(e.message)
    }
}
const updateaUser = async (req, res) => {
    const { _id, id, name, email, gender, status } = req.body
    console.log(req.body)
    try {
        const updateUser = await User.findByIdAndUpdate(_id, req.body, { new: true })
        console.log(updateUser)
        return res.send(updateUser)
    } catch (e) {
        res.send(e.message)
    }
}

export { getUsers, updateaUser }