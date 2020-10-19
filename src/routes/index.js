import { Router } from 'express'

import userRouters from './user_routes'
import chamaRouters from './chama_routes'
const router = new Router()

router.use('/auth/',userRouters)
router.use('/api/',chamaRouters)

export default router