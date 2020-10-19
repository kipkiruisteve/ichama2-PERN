import { User } from '../database/models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getRandomString } from '../helpers/randomify'
import crypto from 'crypto'
import { sendSms} from '../helpers/sms/sendSms'
import { send } from 'process'
export default class UserService {
    static async createUser(userDetails){
        try { 
        const useris = await User.findOne({where:{phoneNumber:userDetails.offPhone}})
        if (useris != null ){
            return useris
        }
        const pin =  getRandomString(4)
        const password = getRandomString(6)
        const salt = crypto.randomBytes(16).toString('hex');
        const hashPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        const hashPin = crypto.pbkdf2Sync(pin, salt, 1000, 64, 'sha512').toString('hex');
        const user = await User.create({
            username:userDetails.offName,
            phoneNumber:userDetails.offPhone,
            pin:hashPin,
            password:hashPassword,
            isOfficial:true
        });
        const sms_text = `Hi, Your 6 digit password is ${password} and 4-digit pin is ${pin}`
        await sendSms(userDetails.offPhone,sms_text)
        return user;
        } catch (err){
            return err
        }
        
    }
    static async login(username,password){
        const user = await User.findOne({where:{phoneNumber:username}})
        if (user){
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
        
    }
    static async  changePassword(username,password){
        const user = await User.findOne({where:{phoneNumber:username}});
        const salt = crypto.randomBytes(16).toString('hex');
        const hpassword =  crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        console.log(hpassword)
        await user.update({password:hpassword});
        await user.save()
        const sms_text = `You have successfully updated your password to ${password}`
        await sendSms(username,sms_text)
        const token = jwt.sign(user.id,process.env.TOKEN_SECRET)
        const data = {
            user,
            token
        }
        return data 
    }
    static async checkUser(phoneNumber){
        const user = await User.findOne({where:{phoneNumber:phoneNumber}})
        console.log(user)
        if (user != null){
            return user
        } else {
            const pin =  getRandomString(4)
        const password = getRandomString(6)
        const salt = crypto.randomBytes(16).toString('hex');
        const hashPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        const hashPin = crypto.pbkdf2Sync(pin, salt, 1000, 64, 'sha512').toString('hex');
        const user1 = await User.create({
            phoneNumber,
            pin:hashPin,
            password:hashPassword
        });
        const sms_text = `Hi, Your 6 digit password is ${password} and 4-digit pin is ${pin}`
        await sendSms(phoneNumber,sms_text)
        return user1;
        }
        
    }
}