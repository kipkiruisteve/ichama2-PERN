import { response } from 'express'
import responseHandler from '../../../helpers/responsehandler'
import {UserService,ChamaService} from '../../../services'
import { sendSms } from '../../../helpers/sms/sendSms'

exports.AddMemberController = async (req,res) => {
    const { chamaId,phoneNumber} = req.body  
    try {
        const user = await UserService.checkUser(phoneNumber)
        const chama = await ChamaService.checkChama(chamaId)
        chama.addUser(user)
        const sms_text = `You have been invited to join ${chama.name} chama,Kindly note that you will have to contribute ${chama.monthlyContribution} per month`
        await sendSms(phoneNumber,sms_text)
        
        return responseHandler(res,'Added Member successfully',201,chama)
    } catch (err) {
        console.log(err)
        return responseHandler(res,'Failed to add member',500,err)
    }
}