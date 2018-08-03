
'use strict';
const express = require("express");
const bodyParser = require('body-parser')
const {dialogflow} = require('actions-on-google');


const app = dialogflow({debug: true});

app.intent('Your Color Intent', (conv) => {
     conv.ask('YoUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});
express().use(bodyParser.json(), app).listen(8000)
/*exports.yourAction = functions.https.onRequest(app);

const express = require('express')
const bodyParser = require('body-parser')
const { dialogflow } = require('actions-on-google')

const app = dialogflow()

express().use(bodyParser.json(), app).listen(3000)/*
