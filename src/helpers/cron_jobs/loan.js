import cron from 'node-cron';
import moment from 'moment';
import { Loan } from '../../database/models';
import { sendSms } from '../sms/sendSms';
cron.schedule('0 * * * * *', async() => {

    const loans = await Loan.findAll({where:{isPaid:false}})
    if (loans){
        for (let i=0;i<loans.length;i++){

            if (loans[i].dataValues.repaymentDate === moment()){

                const user = await User.findOne({where:{id:loans[i].dataValues.userID}});
                
                sms_text= 'Your loan is due today, kindly pay up';

                await sendSms(user.phoneNumber,sms_text);
            }
        }
    }
    console.log("hey")
})
