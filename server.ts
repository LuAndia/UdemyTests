import express from "express";
import { DataStore } from "./data/data";
const app = express();

import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";

// console.log(DataStore.tours);
// console.log(JSON.stringify(DataStore.tours));
// console.log(JSON.parse(JSON.stringify(DataStore.tours)));

app.get("/", (req, res, next) => {
    res.send("TourBooking API");
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.listen(process.env.PORT || 8091, () => {console.log("Server started...")})