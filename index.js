/*"use strict";

const express = require("express");
const restService = express();
var dialog = require('actions-on-google');
this.app = (0,dialog.dialogflow)();
this.app.intent('Your Color Intent', (conv) => {
        //const userColor = conv.parameters.color;
         conv.close("BYEBYE " ); 
          //  conv.close('สวัสดีครับ' + userColor+'คือ '+userColor.length);
});


restService.listen(process.env.PORT || 3000, function() {
  console.log("Server up and listening");
});
*/

'use strict';
const express = require("express");
const restService = express();
// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');
// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});


app.intent('Your Color Intent', conv => {
    const userColor = conv.parameters.color;
    conv.close('เลขนำโชคสำหรับ' + userColor+'คือ '+userColor.length);
});

restService.listen(process.env.PORT || 3000, function() {
  console.log("Server up and listening");
});
