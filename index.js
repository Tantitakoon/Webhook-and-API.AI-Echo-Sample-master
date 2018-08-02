const functions = require('Express')
const { dialogflow, SimpleResponse } = require('actions-on-google')
const app = dialogflow()

app.intent('Default Welcome Intent', function (conv) {

    // คำที่ user พิมพ์มาจะอยู่ใน conv.input.raw 
    // entities ที่ใส่มาจะอยู่ใน conv.parameters

    conv.ask(new SimpleResponse({
        text: 'สิ่งที่จะให้ตอบผ่าน API',
    }))
    //ถ้าใช้ conv.ask บทจะยังไม่ปิดตัวเองหลังตอบ ถ้าอยากให้ปืดตัวเองเปลี่ยนเป็น conv.close

    // SimpleResponse จะเป็นข้อความธรรมดา ถ้าอยากรู้มากกว่านี้ให้ไปเปิด https://developers.google.com/actions/assistant/responses
})

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)
