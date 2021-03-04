import { Router, Request, Response } from 'express'

import { Tools } from '../../controllers/tools'

const router = Router()

const tools = new Tools()

router.get('/check', (req: Request, res: Response) => {
  res.json({
    is: "Ok"
  })
})


router.get('/tools/:tag', tools.searchByTag)
router.get('/tools/id/:id', tools.searchById)
router.get('/tools', tools.listTools)


router.post('/tools/id/:id', tools.delete)
router.post('/tools', tools.save)



export { router }
