import { Router } from 'express'

import userRouters from './user_routes'
import chamaRouters from './chama_routes'
import LoanRouters from './loan_routes'
const router = new Router()

router.use('/auth/',userRouters)
router.use('/api/',chamaRouters)
router.use('/loan/',LoanRouters)

export default router