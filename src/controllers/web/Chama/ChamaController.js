import { response } from 'express'
import responseHandler from '../../../helpers/responsehandler'
import {UserService,ChamaService} from '../../../services'



export default class ChamaController {
    static async loadChama(req,res){
        try {
            const { chamaId } = req.params
            const chama = await ChamaService.checkChama(chamaId)
            return responseHandler(res,'Chama Loaded successfully',200,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
    static async loadOfficial(req,res){
        try {
            const { chamaId } = req.params
            const chama = await ChamaService.checkChamaOfficial(chamaId)
            return responseHandler(res,'Chama Loaded successfully',200,chama)
        } catch (err){
            return responseHandler(res,'Chama does not exist',404,err)
        }
    }
}