import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import passwordRoutes from './routes/passwords.js'
import userRoutes from './routes/users.js'
import { errorHandler } from './middleware/validation.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/passwords', passwordRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.error('Database connection error:', err)
  })