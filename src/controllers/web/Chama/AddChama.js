import responseHandler from '../../../helpers/responsehandler'
import { UserService,ChamaService } from '../../../services'

exports.chamaController = async (req,res) => {
    const {chamaName,chamaLocation,off1Name,off1phone,off2Name,off2phone } = req.body 
    const chamaDetails = {
        chamaName,chamaLocation
    }
    const user1 = {
        offName:off1Name,
        offPhone:off1phone
        
    }
    const user2 = {
        offName:off2Name,
        offPhone:off2phone
    }
    const chama = await ChamaService.createChama(chamaDetails)
    const User1 = await UserService.createUser(user1)
    const User2 = await UserService.createUser(user2)
    return responseHandler(res,'Added Successfully',200,chama)
}