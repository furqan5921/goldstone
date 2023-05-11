
import dotenv from "dotenv"
import userRouter from "./router/userRouter.js"
import exportRouter from "./router/exportCSV.js"
import express from 'express';
import connection from "./config/dbConnect.js"
import cors from "cors"

dotenv.config()
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(cors())

app.use(express.json());

app.use("/users", userRouter)
app.use("/export", exportRouter)



app.listen(8079, () => {
    connection()
    console.log('Server listening on port 8079');
});




