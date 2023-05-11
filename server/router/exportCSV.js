import { Router } from "express";
import User from "../models/userModel.js";
import { createObjectCsvWriter } from "csv-writer"
import { exportCSV } from "../controller/exportCtrl.js";



const app = Router()


app.get("/", exportCSV)

export default app