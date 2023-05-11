import { Router } from "express"

import { getUsers, updateaUser } from "../controller/userCtrl.js"



const app = Router()

app.get('/', getUsers)
app.patch("/", updateaUser)


export default app