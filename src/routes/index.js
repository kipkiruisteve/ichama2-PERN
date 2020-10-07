import { Router } from 'express'

import userRouters from './user_routes'

const router = new Router()

router.use('/',userRouters)

export default router