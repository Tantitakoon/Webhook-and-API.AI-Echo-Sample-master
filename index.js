
/*const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');
const appExpress = express();
const app = dialogflow({ debug: true });
const port =process.env.PORT || 3000;
app.intent('Your Color Intent', conv => {
          conv.close('Thanks for talking to me!');
 });
appExpress.use(bodyParser.json());
appExpress.use('/',(req,res,next)=>{
        console.log("Test");
        next();
},app);
appExpress.listen(port);
console.log("Create Server port :"+port);*/
const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
app.get('/',(req,res)=>{
          res.send("Hello world");
});
app.listen(port);
console.log("it's ok "+port);
//express().use(bodyParser.json(), app).listen(process.env.PORT || 3000);
//express

