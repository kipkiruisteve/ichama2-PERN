import { UserService } from '../../../services'
import responseHandler from '../../../helpers/responsehandler'
import jwt from 'jsonwebtoken'
export default class UserController {
    static async changePassword(req,res){
        const { username, password} = req.body 
        const user = await UserService.changePassword(username,password)
        return responseHandler(res,'Pin Reset Successfully',200,user)

    }
    static async loadUser(req,res){
        const user = req.user
        const data = {
            user
        }
        return responseHandler(res,'User Loaded Successfuly',200,data)
    }
}