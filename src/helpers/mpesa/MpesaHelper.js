import { Mpesa } from "mpesa-api";

const credentials = {
    client_key: 'xRnXI6CzMc4fmJMYnsybUVYtgQ8ndtUo',
    client_secret: 'ffYXfx8Yz9EKnBVk',
    initiator_password: '3050manu',
    security_credential: 'GY2TW4F/BQtBhghp2LroOR6920oQ/RNsgBSXOpiQu7Al0SoOdAn5oxaLAkAPAXXf8gaNsbqXHRSZgoj3uYpr8jrcaF8RXBfcIlFMF5um7zzl3a4rvUUErUIzbtcLVht6LBCzBwN7B7uU8dzaBu7taZux3k1141i+aoPYJhMc4EoV17VTDV9C/zIPhD5NTicJae1IAF39Bmn1kju++0JPJYEXCGO+cQkV2pGPR8woaHUB8Y0Bm3USzN9qPW/BbIY9Wrut+ujVZ31HM14VTROw/AEqkqkxNyAuSuUasZmf+GwBHCGHApb4U5uI7J623e2qFLnlMIBf49CF9Fd3NHMFBw=='
    // certificatepath: 'keys/example.cert'
};

const environment = "sandbox";
const mpesa = new Mpesa(credentials, environment);
export default  class MpesaService{
    static async c2ba (){
      mpesa
  .lipaNaMpesaOnline({
    BusinessShortCode: 174379,
    Amount: 1000 /* 400 is an example amount */,
    PartyA: "254710751867",
    PartyB:"174379",
    PhoneNumber: "254710751867",
    CallBackURL: "https://sandbox.safaricom.co.ke/mpesa/",
    AccountReference: "Account Reference",
    passKey: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
    TransactionType: "CustomerPayBillOnline" /* OPTIONAL */,
    TransactionDesc: "Testing stk push" /* OPTIONAL */,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.error(error);
  });
    }
    static async btoc(phoneNumber,amount){
        mpesa
  .b2c({
    Initiator: "Initiator Name",
    Amount: 1000 /* 1000 is an example amount */,
    PartyA: "174379",
    PartyB: "254710751867",
    QueueTimeOutURL: "Queue Timeout URL",
    ResultURL: "Result URL",
    CommandID: "Command ID" /* OPTIONAL */,
    Occasion: "Occasion" /* OPTIONAL */,
    Remarks: "Remarks" /* OPTIONAL */,
  })
  .then((response) => {
    //Do something with the response
    //eg
    console.log(response);
  })
  .catch((error) => {
    //Do something with the error;
    //eg
    console.error(error);
  });
    }
}