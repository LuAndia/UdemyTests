import express from "express";
const app = express();

import * as bodyparser from "body-parser";
const jsonParser = bodyparser.json();

import { DataStore } from "./data/data";
import { apiGetTours } from "./api/tours/apiGetTours";
import { apiGetTourDetail } from "./api/tours/apiGetTourDetail";
import { apiCreateTour } from "./api/tours/apiCreateTour";
import { apiDeleteTour } from "./api/tours/apiDeleteTour";

// console.log(DataStore.tours);
// console.log(JSON.stringify(DataStore.tours));
// console.log(JSON.parse(JSON.stringify(DataStore.tours)));

app.get("/", (req, res, next) => {
    res.send("TourBooking API");
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.post("/tours", jsonParser, apiCreateTour);

app.delete("/tours/:id", apiDeleteTour);

app.listen(process.env.PORT || 8091, () => {console.log("Server started...")})