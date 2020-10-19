import { UserService } from '../../../services'
import responseHandler from '../../../helpers/responsehandler'
exports.loginUser = async (req,res) => {
    const { username, password} = req.body 
    const user = await UserService.login(username,password)
    return responseHandler(res,'Login Successfully',200,user)
}