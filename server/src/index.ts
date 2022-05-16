import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes'
import config from './config'

const PORT = config.port || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))
app.use(cors())
// add routing for /api path
app.use('/api', routes)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
