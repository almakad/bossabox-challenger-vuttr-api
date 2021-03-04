import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import TokenPayload from './auth-interface'
const env = require('../main/config/env')

export default function userAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({msg: "Unauthorized"})
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, env.jwtSecret) 
    const { id } = data as TokenPayload

    req.userId = id
    return next()

  } catch (error) {
    return res.status(401).json({msg: "Unauthorized"})
  }
}