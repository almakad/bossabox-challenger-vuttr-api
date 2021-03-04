import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'

import { router } from '../routes/router'
import  createConnection from '../../database/index'
import { AppError } from '../../errors/AppError';

import setupSwagger from './config-swagger'

createConnection().then(() => console.log('Connected to database'))
  .catch((error) => console.log(error))


const app = express();

setupSwagger(app)

app.use(express.json())

app.use('/api', router)

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message})
  }
  return res.status(500).json({
    status: 'Error',
    message: `Internal server error ${err.message}`
  })
})

export { app }