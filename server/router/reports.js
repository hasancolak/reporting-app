const express = require("express");
const router = express.Router();
const reportsData = require("../data/reports.json");

router.get("/", function (req, res) {
  res.json(reportsData);
});

router.put("/:reportId", function (req, res) {
  res.send({ result: "SUCCESS", ticketState: "CLOSED" });
});

router.post("/block/:reportId", function (req, res) {
  res.send({ result: "SUCCESS", ticketState: "BLOCKED" });
});

module.exports = router;
