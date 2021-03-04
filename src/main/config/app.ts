import express from 'express';
import { router } from '../routes/router'

import  createConnection from '../../database/index'

createConnection().then(() => console.log('Connected to database'))
  .catch((error) => console.log(error))


const app = express();

app.use(express.json())

app.use('/api', router)

export { app }