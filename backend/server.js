import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

// db
import connectDB from './config/db.js'
// colors
import colors from 'colors'
// get routers
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
// middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import morgan from 'morgan'

dotenv.config()

connectDB()

const app = express()
if (process.env.NODE_ENV === 'development') {
  // dev gives us HTTP method, status
  app.use(morgan('dev'))
}
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
// Paypal
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

// making a file static (without it, it wont be visible)
const __dirname = path.resolve() // mimic
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  // make 'build' folder in the front end a static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  // if it not any of the routes listed above
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
