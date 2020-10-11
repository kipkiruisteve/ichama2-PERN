import { User } from '../database/models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getRandomString } from '../helpers/randomify'

export default class UserService {
    static async createUser(userDetails){
        const pin =  bcrypt.hashSync(getRandomString(4), 8);
        const password = bcrypt.hashSync(getRandomString(6), 8);
        const user = await User.create({
            username:userDetails.offName,
            phoneNumber:userDetails.offPhone,
            pin,
            password,
            isOfficial:true
        });

        return user;
    }
    static async login(username,password){
        const user = await User.findOne({where:{username:username}})
        const isPassword = bcrypt.compareSync(user.password,password)
        if (isPassword){
            const token = jwt.sign(user.id,process.env.TOKEN_SECRET)
            const data = {
                user,
                token
            }
            return data 
        } else {
            return null
        }
    }
    static async  changePassword(username,password){
        const user = await User.findOne({where:{username:username}});
        const hpassword = bcrypt.hashSync(password, 8);
        console.log(hpassword)
        await user.update({password:hpassword});

        const token = jwt.sign(user.id,process.env.TOKEN_SECRET)
        const data = {
            user,
            token
        }
        return data 
    }
    static async checkUser(phoneNumber,username){
        const user = User.findOne({where:{phoneNumber:phoneNumber,username:username}})
        return user
    }
}