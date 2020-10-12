import { Transaction } from '../database/models'

export default class TransactionService {
    static async createTransaction(transactionDetails){
        const transaction = await Transaction.create({

        })
        return transaction
    }
    static async checkTransactionStatus(userId,chamaId){
        const transaction = await Transaction.findOne({where:{userId:userId,chamaId:chamaId}})
        return transaction
    }
}