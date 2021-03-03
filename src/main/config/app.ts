import express from 'express';
import { router } from '../config/routes/router'

const app = express();

app.use(express.json())

app.use('/api', router)

export { app }