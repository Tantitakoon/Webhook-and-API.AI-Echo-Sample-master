
'use strict';

const {dialogflow} = require('actions-on-google');


const app = dialogflow({debug: true});

app.intent('Your Color Intent', (conv) => {
     conv.ask('YoUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
});

exports.yourAction = functions.https.onRequest(app);
