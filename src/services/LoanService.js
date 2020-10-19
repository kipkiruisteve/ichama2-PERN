import { Loan } from '../database/models'

export default class LoanService {
    static async createLoan(loanDetails){
        const loan = await Loan.create(loanDetails,{raw:true})
        return loan
    }
    static async loadloanChama({userId,chamaId}){
        try {
            const loans = await Loan.findAll({where:{userId:userId,chamaId:chamaId}})

            // console.log(loans)
            return loans
        
        } catch (err){
            console.log(err)
        }
        
    }
    static async loadChamaLoans(chamaId){
        const loans  = await Loan.findAll({where:{id:chamaId,isApproved:false}})
        console.log(loans)
        return loans
    }
    static async approveLoan(chamaId,loanId){
        console.log(loanId)
        const  loan = await Loan.findByPk(loanId)
        console.log(loan)
        await loan.update({isApproved:true,isGranted:true})
        return loan
    }
    static async DeclineLoan(chamaId,loanId){
        console.log(loanId)
        const  loan = await Loan.findByPk(loanId)
        console.log(loan)
        await loan.update({isApproved:true,isGranted:false})
        return loan
    }
    static async getAllLoan(userId){
        console.log(userId)
        const loans = await Loan.findAll({where:{userId:userId}})
        return loans
    }
    static async payLoans(loanId){
        const loan =  await Loan.findOne({where:{id:loanId}})
        await loan.update({isPaid:true})
        return loan
    }
}