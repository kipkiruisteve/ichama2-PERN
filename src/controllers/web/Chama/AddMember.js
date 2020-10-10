import { response } from 'express'
import responseHandler from '../../../helpers/responsehandler'
import {UserService,ChamaService} from '../../../services'


exports.AddMemberController = async (req,res) => {
    const { chamaId,phoneNumber,username} = req.body  
    try {
        const user = await UserService.checkUser(phoneNumber,username)
        const chama = await ChamaService.checkChama(chamaId)
        chama.addUser(user)
        return responseHandler(res,'Added Member successfully',201,chama)
    } catch (err) {
        return responseHandler(res,'Failed to add member',500,err)
    }
}