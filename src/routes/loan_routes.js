import { Router } from 'express'
import { loginUser } from '../controllers/web/User/loginUser'
import { LoanController} from '../controllers/loans'
import { UserMiddleware } from '../middlewares/auth/'
const router = Router()


router.route('/').post(UserMiddleware.isAuth,LoanController.createLoan)
router.route('/:chamaId').get(UserMiddleware.isAuth,LoanController.loadUserLoans)
router.route('/chama/loans/:chamaId').get(UserMiddleware.isAuth,LoanController.getChamaLoans)
router.route('/loans/approve').post(UserMiddleware.isAuth,LoanController.approveLoans)
router.route('/loans/decline').post(UserMiddleware.isAuth,UserMiddleware.isOfficial,LoanController.DeclinesLoans)
router.route('/loans/').get(UserMiddleware.isAuth,LoanController.getAllLoan)
router.route('/pay/').post(UserMiddleware.isAuth,LoanController.payLoan)

export default router