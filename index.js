"use strict";

const express = require("express");
const restService = express();


restService.listen(process.env.PORT || 3000, function() {
  console.log("Server up and listening");
});
