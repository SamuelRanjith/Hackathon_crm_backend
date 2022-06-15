//EMPLOYEE DASHBOARD

//EMPLOYEE CAN VIEW

const router = require("express").Router();
import verify from "./employeeverify";
import { find } from "../../models/ServiceRequest";
import { find as _find } from "../../models/Lead";
import { find as __find } from "../../models/Contact";

//SERVICE REQUEST API'S

//GET

router.get("/servicerequest", verify, async (req, res) => {
  try {
    const tickets = await find().exec();
    res.status(200).send(tickets);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//LEAD API'S

//GET

router.get("/lead", verify, async (req, res) => {
  try {
    const leads = await _find().exec();
    res.status(200).send(leads);
  } catch (error) {
    console.log(error);
  }
});

//CONTACT API'S

//GET

router.get("/contact", verify, async (req, res) => {
  try {
    const contacts = await __find().exec();
    res.status(200).send(contacts);
  } catch (error) {
    console.log(error);
  }
});

export default router;
