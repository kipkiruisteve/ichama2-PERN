import jwt from 'jsonwebtoken'
import { User,Chama } from '../../database/models'
import responseHandler from '../../helpers/responsehandler'
export default class UserMiddleware{
    static async isAuth(req,res,next){
        try { 
            const token = req.header('Authorization').replace('Bearer ','')
        const data = jwt.verify(token,process.env.TOKEN_SECRET)
        const user = await User.findByPk(data,{
            include:[ Chama]
        })
        if (!user){
            res.status(401).json({
                success:false,
                message:'Invalid token'
            })
        } else {
            req.user = user 
            req.token = token 
            next()
        }
        } catch (err){
            return responseHandler(res,'Invalid token supplied',401,err)
        }
        
    }
    static async isOfficial (req,res,next){
        try {
            if (req.user.isOfficial){
                next()
            }
        } catch (err){
            return responseHandler(res,'Insufficient Permissions',403,err)
        }
}
}
