import { Chama , User,Transaction} from '../database/models'
// import bcrypt from 'bcrypt'
import moment from 'moment'


export default class ChamaService {
    static async createChama(chamaDetails,User1,User2){
        console.log(chamaDetails)
        const chama  = await Chama.create({
            name:chamaDetails.chamaName,
            location:chamaDetails.chamaLocation,
            monthlyContribution:chamaDetails.monthlyContribution
        })
        const ids = chama.id
        console.log(moment().add(1,'M'))
        const ui = {
            chamaId:ids,
            userId:User1.id,
            nextPaymentDate:moment().add(1,'M')
        }
        const ui2 = {
            chamaId:ids,
            userId:User2.id,
            nextPaymentDate:moment().add(1,'M')
        }
        console.log(ui2)
        await Transaction.create(
            ui, { raw: true })
        await Transaction.create(
            ui2, { raw: true }
        )
        return chama
    }
    static async checkChama(chamaId){
        const chama = Chama.findOne({where:{id:chamaId}})
        return chama
    }
    static async checkChamaOfficial(chamaId){
        const chama = await Chama.findByPk(chamaId,{include:[{
            model:User,
            attributes:['id','phoneNumber','username','isOfficial']
            // order: [['id']]

        }]})
        return chama
    }
}