

exports.sendSms = (to,sms_text) => {
    const credentials = {
        apiKey: process.env.API_KEY,         // use your sandbox app API key for development in the test environment
        username: process.env.username,      // use 'sandbox' for development in the test environment
    };
    const AfricasTalking = require('africastalking')(credentials);
     
    // Initialize a service e.g. SMS
    const sms = africastalking.SMS
     
    // Use the service
    const options = {
        to: `${to}`,
        message: `${sms_text}`
    }
     
    // Send message and capture the response or error
    sms.send(options)
        .then( response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        });
}