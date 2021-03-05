import { Router, Request, Response } from 'express'

import { Tools } from '../../controllers/tools'
import { UsersController } from '../../controllers/users'

import userAuthMiddleware from '../../middlewares/users-auth'



const router = Router()

const tools = new Tools()
const usersController = new UsersController()

router.get('/check', (req: Request, res: Response) => {
  res.json({
    is: "Ok"
  })
})

// Route to save a new tool
router.post('/tools', userAuthMiddleware, tools.save)


router.get('/tools/:tag', userAuthMiddleware, tools.searchByTag)
router.get('/tools/id/:id', userAuthMiddleware, tools.searchById)
router.get('/tools', userAuthMiddleware, tools.listTools)


// Route to delete a tool by id
router.post('/tools/id/:id', userAuthMiddleware, tools.delete)


// Registration route
router.post('/signup', usersController.store)
router.post('/login', usersController.auth)


router.get('/index', userAuthMiddleware, usersController.index)

export { router }
