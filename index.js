const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 4055;

//IMPORT ROUTES

import adminRoute from "./routes/adminauth/adminauth.js";
import managerRoute from "./routes/managerauth/managerauth.js";
import employeeRoute from "./routes/employeeauth/employeeauth.js";
import adminDashboardRoute from "./routes/adminauth/adminDashboard.js";
import managerDashboardRoute from "./routes/managerauth/managerDashboard.js";
import employeeDashboardRoute from "./routes/employeeauth/employeeDashboard.js";

dotenv.config();

//CONNECTION TO DATABASE

const MONGO_URL = "mongodb://localhost";

// node - Mongodb
async function createConnection(){
  const client = new MongoClient(MONGO_URL); 
  await client.connect();
  console.log("Mongodb is connected")
}

createConnection();

//MIDDLEWARE 
app.use(express.json(), cors());

//ROUTE MIDDLEWARE

app.use("/api/admin", adminRoute);
app.use("/api/manager", managerRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/admindashboard", adminDashboardRoute);
app.use("/api/managerdashboard", managerDashboardRoute);
app.use("/api/employeedashboard", employeeDashboardRoute);

app.get("/", (req, res) => {
  res.send(
    `<a href="https://github.com/SamuelRanjith/Hackathon_crm_backend.git">This is backend app , click to open code</a>`
  );
});
app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));

