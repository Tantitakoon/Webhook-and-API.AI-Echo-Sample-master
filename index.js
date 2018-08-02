var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
var dialog = require('actions-on-google');

this.app = (0,dialog.dialogflow)();
this.app.intent('Your Color Intent', (conv) => {
        const userColor = conv.parameters.color;

            conv.close('สวัสดีครับ' + userColor+'คือ '+userColor.length);
});

console.log('hello ');
}).listen(port);
console.log("Create Server port :"+port);
