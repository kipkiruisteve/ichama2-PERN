import { Router } from 'express'
import { chamaController} from '../controllers/web/Chama/AddChama'
import { AddMemberController } from '../controllers/web/Chama/AddMember'
import { ChamaController } from '../controllers/web/Chama'
import { UserMiddleware } from '../middlewares/auth/'
const router = Router()

router.route('/').post(chamaController)
router.route('/add_member/').post(AddMemberController)
router.route('/chama/:chamaId').get(UserMiddleware.isAuth,UserMiddleware.isOfficial ,ChamaController.loadChama)
router.route('/chama/off/:chamaId').get(UserMiddleware.isAuth,UserMiddleware.isOfficial ,ChamaController.loadOfficial)
export default router