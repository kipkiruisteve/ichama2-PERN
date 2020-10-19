import { Chama , User} from '../database/models'
// import bcrypt from 'bcrypt'


export default class ChamaService {
    static async createChama(chamaDetails){
        const chama  = await Chama.create({
            name:chamaDetails.chamaName,
            location:chamaDetails.chamaLocation,
            monthlyContribution:chamaDetails.monthlyContribution
        })
        
        await chama.addUser(chamaDetails.use1)
        await chama.addUser(chamaDetails.use2)
        console.log()
        return chama
    }
    static async checkChama(chamaId){
        const chama = Chama.findOne({where:{id:chamaId}})
        return chama
    }
    static async checkChamaOfficial(chamaId){
        const chama = await Chama.findByPk(chamaId,{include:[{
            model:User,
            attributes:['phoneNumber','username','isOfficial']
        }]})
        return chama
    }
}