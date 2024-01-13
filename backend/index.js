import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Welcome");
})
app.use("/api", router);

app.get("/api/config/paypal", (req, res) => {
    res.send({ cliendId: process.env.PAYPAL_CLIENT_ID });
});

const _dirname = path.resolve();
app.use("/uploads", express.static(_dirname + "/uploads"));

app.listen(port, () => console.log(`Serving on ${port}`));