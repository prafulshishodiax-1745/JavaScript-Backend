import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: "./.env"
});

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log("MongoDB connected successfully!");

        app.on("error", (error) => {
            console.log("ERROR: ", error);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `App is listening on port ${process.env.PORT || 8000}`
            );
        });

    } catch (error) {
        console.log("ERRORRR: ", error);
        process.exit(1);
    }
})();