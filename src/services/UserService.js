import { User } from '../database/models'
import bcrypt from 'bcrypt'
import { getRandomString } from '../helpers/randomify'
export default class UserService {
    static async createUser(userDetails){
        const pin =  bcrypt.hashSync(getRandomString(4), 8);
        const password = bcrypt.hashSync(getRandomString(6), 8);
        const user = await User.create({
            username:userDetails.offName,
            phoneNumber:userDetails.offPhone,
            pin,
            password
        });

        return user;
    }
}