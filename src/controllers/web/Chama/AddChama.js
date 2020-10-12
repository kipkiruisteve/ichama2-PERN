import responseHandler from '../../../helpers/responsehandler'
import { UserService,ChamaService } from '../../../services'
import { sendSms } from '../../../helpers/sms/sendSms'
exports.chamaController = async (req,res) => {
    const {chamaName,chamaLocation,off1Name,off1phone,off2Name,off2phone,monthlyContribution } = req.body 
    
    const user1 = {
        offName:off1Name,
        offPhone:off1phone
        
    }
    const user2 = {
        offName:off2Name,
        offPhone:off2phone
    }
    const User1 = await UserService.createUser(user1)
    const User2 = await UserService.createUser(user2)
    const use1 = User1.id
    const use2 = User2.id
    const chamaDetails = {
        chamaName,chamaLocation,use1,use2,monthlyContribution
    }
    const chama = await ChamaService.createChama(chamaDetails,User1,User2)
    User1.addChama(chama)
    User2.addChama(chama)
    chama.addUser(User1)
    chama.addUser(User2)
    const sms_text = `You have been invited to join ${chama.name} chama,Kindly note that you will have to contribute ${chama.monthlyContribution} per month`
    await sendSms(User1.phoneNumber,sms_text)
    await sendSms(User2.phoneNumber,sms_text)
    return responseHandler(res,'Added Successfully',201,chama)
}