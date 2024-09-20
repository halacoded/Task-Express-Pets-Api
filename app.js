//import
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database.js");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const petRouter = require("./api/Pet/petRouter.js");
//init
dotenv.config();
const app = express();
connectDB();
const Port = process.env.PORT;
//midleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//routes
app.use("/api/pets/", petRouter);
//handler
app.use(notFoundHandler);
app.use(errorHandler);
//start listen
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
