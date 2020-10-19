import { response } from 'express'
import responseHandler from '../../../helpers/responsehandler'
import {UserService,ChamaService,TransactionService} from '../../../services'



export default class ChamaController {
    static async loadChama(req,res){
        try {
            const { chamaId } = req.params
            const chama = await ChamaService.checkChama(chamaId)
            const transaction = await TransactionService.checkTransactionStatus(req.user.id,chamaId)
            console.log(transaction)
            return responseHandler(res,'Chama Loaded successfully',200,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
    static async loadOfficial(req,res){
        try {
            
            const { chamaId } = req.params
            console.log(chamaId)
            const chama = await ChamaService.checkChamaOfficial(chamaId)
            console.log(chama)
            // const transaction = await TransactionService.checkTransactionStatus(req.user.id,chamaId)
            // console.log(transaction)
            return responseHandler(res,'Chama Loaded successfully',200,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
    static async removemember(req,res){
        try{
            const { userId,chamaId } = req.body 
            const chama = await ChamaService.removeMember(userId,chamaId)
            return responseHandler(res,'Member removed  successfully',404,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
    static async listAdmins(req,res){
        try{
            const chama = await ChamaService.ListAdmin
            return responseHandler(res,'Chama Loaded successfully',200,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
    static async removeChama(req,res){
        try{
            const { chamaId } = req.body 
            const chama = await ChamaService.deleteAdmin(chamaId)
            return responseHandler(res,'Member removed  successfully',404,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
}