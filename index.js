
'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
     conv.close('YoUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});

exports.yourAction = functions.https.onRequest(app);
