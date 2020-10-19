import { LoanService } from '../../services'
import { Loan } from '../../database/models'
import { MpesaHelper } from '../../helpers/mpesa'
import responseHandler from '../../helpers/responsehandler'
import moment from 'moment'
export default class LoanController{
    static async createLoan(req,res){
        const { chamaId,amount,repayment} = req.body 
        const repaymentDate = repayment
        const loanDetails = {
            userId:req.user.id,
            chamaId,
            amount,
            repaymentDate
        }
        console.log(loanDetails)
        const loan = await LoanService.createLoan(loanDetails)
        return responseHandler(res,'Loan Submitted successfully',201,loan)
    }
    static async loadUserLoans(req,res){
        const { chamaId } = req.params
        const loanDetails = {
            userId:req.user.id,
            chamaId
        }
        const loans = await LoanService.loadloanChama(loanDetails)
        console.log(loans)
        return responseHandler(res,'Loans Loaded',200,loans)
    }
    static async getChamaLoans(req,res){
        const { chamaId }= req.params
        const loans = await LoanService.loadChamaLoans(chamaId)
        return responseHandler(res,'Loans Loaded',200,loans)
    }
    static async approveLoans(req,res){
        const { chamaId,loanId} = req.body 
        console.log(loanId)
        const loan = await Loan.findByPk(loanId)
        const loans = await LoanService.approveLoan(chamaId,loanId)
        await MpesaHelper.btoc()
        return responseHandler(res,'Loans Loaded',200,loans)
    }
    static async DeclinesLoans(req,res){
        const { chamaId,loanId} = req.body 
        console.log(loanId)
        const loan = await Loan.findByPk(loanId)
        const loans = await LoanService.DeclineLoan(chamaId,loanId)
        // await MpesaHelper.btoc("254740415950",loan.amount)
        return responseHandler(res,'Loans Loaded',200,loans)
    }
    static async getAllLoan(req,res){
        const userId = req.user.id 
        console.log(req.user)
        // const loans = await LoanService.getAllLoans(userId)
        l = "k"
        return responseHandler(res,'Loans Loaded',200,l)
    }
    static async payLoan(req,res){
        const { loanId } = req.body
        const loan = await LoanService.payLoans(loanId) 
        await MpesaHelper.c2ba()
        return responseHandler(res,'Loans Loaded',200,l)
    }
}