import express from "express";
import { DataStore } from "./data/data";
const app = express();

// console.log(DataStore.tours);
// console.log(JSON.stringify(DataStore.tours));
// console.log(JSON.parse(JSON.stringify(DataStore.tours)));

app.get("/", (req, res, next) => {
    res.send("Tour Booking API HEHE");
});

app.get("/tours", (req, res, next) => {
    res.json(DataStore.tours);
});

app.post("/tours", (req, res, next) => {
    res.send("Add a new tour...");
});

app.listen(process.env.PORT || 8091, () => {console.log("Server started...")})