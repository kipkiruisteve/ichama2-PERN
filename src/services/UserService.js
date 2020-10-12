import { User } from '../database/models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getRandomString } from '../helpers/randomify'
import crypto from 'crypto'
export default class UserService {
    static async createUser(userDetails){
        try { 
        const pin =  getRandomString(4)
        const password = getRandomString(6)
        salt = crypto.randomBytes(16).toString('hex');
        hashPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        hashPin = crypto.pbkdf2Sync(pin, salt, 1000, 64, 'sha512').toString('hex');
        const user = await User.create({
            username:userDetails.offName,
            phoneNumber:userDetails.offPhone,
            pin:hasPin,
            password:hPassword,
            isOfficial:true
        });

        return user;
        } catch (err){
            return err
        }
        
    }
    static async login(username,password){
        const user = await User.findOne({where:{phoneNumber:username}})
        const salt = crypto.randomBytes(16).toString('hex');
        const isPassword = crypto.pbkdf2Sync(password,salt, 1000, 64, 'sha512').toString('hex');
        console.log(isPassword)
        if (isPassword){
            const token = jwt.sign(user.id,process.env.TOKEN_SECRET)
            const data = {
                user,
                token
            }
            console.log(data)
            return data 
        } else {
            return null
        }
    }
    static async  changePassword(username,password){
        const user = await User.findOne({where:{phoneNumber:username}});
        const salt = crypto.randomBytes(16).toString('hex');
        const hpassword =  crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        console.log(hpassword)
        await user.update({password:hpassword});
        await user.save()
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