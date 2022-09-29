const express = require("express");
const app = express();
const reports = require("./router/reports");

app.use("/reports", reports);

app.listen(8080, function () {
  console.log("Web Server started on port 8080");
});
