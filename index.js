
/*'use strict';
const express = require("express");
const bodyParser = require('body-parser')
const {dialogflow} = require('actions-on-google');


const app = dialogflow({debug: true});

app.intent('Your Color Intent', (conv) => {
     conv.ask('YoUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});
express().use(bodyParser.json(), app).listen(8000)*/
/*exports.yourAction = functions.https.onRequest(app);

const express = require('express')
const bodyParser = require('body-parser')
const { dialogflow } = require('actions-on-google')

const app = dialogflow()

express().use(bodyParser.json(), app).listen(3000)*/


/*const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

app.intent('Your Color Intent', (conv) => {
           const userColor = conv.parameters.color;

               conv.close('สวัสดีครับ' + userColor+'คือ '+userColor.length);
   });

express().use(bodyParser.json(), app).listen(process.env.PORT || 3000);
*/
