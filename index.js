
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow({ debug: true });
app.intent('Your Color Intent', conv => {
          conv.close('Thanks for talking to me!');
   });

express().use(bodyParser.json(), app).listen(process.env.PORT || 3000);

