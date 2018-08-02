
'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Your Color Intent', (conv) => {
     conv.close('YoUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});

exports.yourAction = functions.https.onRequest(app);
