import express, { json } from "express";
const app = express();
import dotenv from "dotenv";
import { MongoClient } from "Mongodb";
import cors from "cors";
const PORT = process.env.PORT;

//IMPORT ROUTES

import adminRoute from "./routes/adminauth/adminauth.js";
import managerRoute from "./routes/managerauth/managerauth.js";
import employeeRoute from "./routes/employeeauth/employeeauth.js";
import adminDashboardRoute from "./routes/adminauth/adminDashboard.js";
import managerDashboardRoute from "./routes/managerauth/managerDashboard.js";
import employeeDashboardRoute from "./routes/employeeauth/employeeDashboard.js";

dotenv.config();

//CONNECTION TO DATABASE

connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db  ")
);

//MIDDLEWARE
app.use(json(), cors());

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

