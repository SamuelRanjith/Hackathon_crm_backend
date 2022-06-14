import express, { json } from "express";
const app = express();
import { config } from "dotenv";
import { connect } from "mongoose";
import cors from "cors";
const PORT = process.env.PORT;

//IMPORT ROUTES

import adminRoute from "./routes/adminauth/adminauth";
import managerRoute from "./routes/managerauth/managerauth";
import employeeRoute from "./routes/employeeauth/employeeauth";
import adminDashboardRoute from "./routes/adminauth/adminDashboard";
import managerDashboardRoute from "./routes/managerauth/managerDashboard";
import employeeDashboardRoute from "./routes/employeeauth/employeeDashboard";

config();

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

// "start": "nodemon index.js"
