import { Router } from 'express'
import { chamaController} from '../controllers/web/Chama/AddChama'
const router = Router()

router.route('/').post(chamaController)

export default router