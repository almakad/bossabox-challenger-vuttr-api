import { app } from './app'
const env = require('./env')

app.listen(env.port, () => console.log(`Server running at ${env.port}`))