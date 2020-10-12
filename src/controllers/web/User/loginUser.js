import { UserService } from '../../../services'
import responseHandler from '../../../helpers/responsehandler'
exports.loginUser = async (req,res) => {
    const { username, password} = req.body 
    const user = await UserService.login(username,password)
    console.log(user)
    if (user != null){
        return responseHandler(res,'Login Successfully',200,user)
    } else {
        return null
    }   
}