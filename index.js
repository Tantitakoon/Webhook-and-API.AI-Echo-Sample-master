
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

app.intent('Your Color Intent', (conv) => {
           const userColor = conv.parameters.color;

               conv.close('สวัสดีครับ' + userColor+'คือ '+userColor.length);
   });

express().use(bodyParser.json(), app).listen(process.env.PORT || 3000);

