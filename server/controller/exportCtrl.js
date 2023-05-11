import User from "../models/userModel.js";
import { createObjectCsvWriter } from "csv-writer"
const exportCSV = async (req, res) => {
    try {
        const users = await User.find();

        const csvWriter = createObjectCsvWriter({
            path: "users.csv",
            header: [
                { id: "id", title: "ID" },
                { id: "name", title: "Name" },
                { id: "email", title: "Email" },
                { id: "gender", title: "Gender" },
                { id: "status", title: "Status" },
            ],
        });

        await csvWriter.writeRecords(users);

        res.attachment("users.csv");
        res.sendFile("users.csv", { root: "." });
    } catch (e) {
        res.status(500).send(e.message);
    }
};

export { exportCSV }