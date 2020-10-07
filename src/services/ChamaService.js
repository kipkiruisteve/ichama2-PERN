import { Chama } from '../database/models'
// import bcrypt from 'bcrypt'


export default class ChamaService {
    static async createChama(chamaDetails){
        const chama  = await Chama.create({
            name:chamaDetails.chamaName,
            location:chamaDetails.chamaLocation
        })
        return chama
    }
}