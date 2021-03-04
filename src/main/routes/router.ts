import { Router, Request, Response } from 'express'

import { Tools } from '../../controllers/tools'

const router = Router()

const tools = new Tools()

router.get('/check', (req: Request, res: Response) => {
  res.json({
    is: "Ok"
  })
})

router.post('/tools', tools.save)

export { router }
