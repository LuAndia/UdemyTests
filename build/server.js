"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const bodyparser = __importStar(require("body-parser"));
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });
const apiGetTours_1 = require("./api/tours/apiGetTours");
const apiGetTourDetail_1 = require("./api/tours/apiGetTourDetail");
const apiCreateTour_1 = require("./api/tours/apiCreateTour");
const apiDeleteTour_1 = require("./api/tours/apiDeleteTour");
const apiUpdateTour_1 = require("./api/tours/apiUpdateTour");
const path_1 = __importDefault(require("path"));
// const authenticator: CustomRequestHandler  = (req, res, next) => {
//     const username = "Andy123";
//     req.user = username;
//     next();
// }
// const logger: CustomRequestHandler = (req, res, next) => {
//     console.log("User: " + req.user + " - " + new Date() + " - " + req.method + " Request to " + req.path);
//     next();
// }
// app.use(authenticator);
// app.use(logger);
const morgan_1 = __importDefault(require("morgan"));
const apiUploadImage_1 = require("./api/tours/apiUploadImage");
const errorHandling_1 = require("./api/general/errorHandling");
const logger = morgan_1.default("dev");
app.use(logger);
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
// console.log(DataStore.tours);
// console.log(JSON.stringify(DataStore.tours));
// console.log(JSON.parse(JSON.stringify(DataStore.tours)));
app.get("/", (req, res, next) => {
    res.send("TourBooking API");
});
app.get("/tours", logger, apiGetTours_1.apiGetTours);
app.get("/tours/:id", apiGetTourDetail_1.apiGetTourDetail);
app.post("/tours", jsonParser, apiCreateTour_1.apiCreateTour);
app.delete("/tours/:id", apiDeleteTour_1.apiDeleteTour);
app.patch("/tours/:id", jsonParser, apiUpdateTour_1.apiUpdateTour);
app.post("/tours/:id/img", apiUploadImage_1.apiUploadImage);
app.use(errorHandling_1.apiErrorHandler);
app.listen(process.env.PORT || 8091, () => { console.log("Server started..."); });
