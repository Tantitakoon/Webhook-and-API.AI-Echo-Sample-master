

"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
