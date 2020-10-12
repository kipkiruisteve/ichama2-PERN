
exports.sendSms = async (phoneNumber,sms_text) => {
    const credentials = {
        apiKey:process.env.API_KEY,
        username:process.env.username
      }
      
    const Africastalking = require('africastalking')(credentials)
    
    const sms = Africastalking.SMS
    const options = {
        to: [phoneNumber],
        message:sms_text
}
    try {
        await sms.send(options)
        console.log('SMS sent')
    } catch (err){
        console.log(err)
        console.log('Error sending email')
    }

}
