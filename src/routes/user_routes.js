import { Router } from 'express'
import { loginUser } from '../controllers/web/User/loginUser'
import { UserController} from '../controllers/web/User'
import { UserMiddleware } from '../middlewares/auth/'
const router = Router()


router.route('/').post(loginUser)
router.route('/reset/').post(UserController.changePassword)
router.route('/user/').get(UserMiddleware.isAuth,UserController.loadUser)
export default router