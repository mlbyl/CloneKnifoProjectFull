const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const synchDBConnection = require('./config/syncDbConnection')
const userRoutes = require('./src/routes/userRoutes/index')
const brandRoutes = require('./src/routes/brandRoutes/index')
const productRoutes = require('./src/routes/productRoutes/index')
const imageRoutes = require('./src/routes/imageRoutes/index')
const reviewRoutes = require('./src/routes/reviewRoutes/index')
const orderItemRoutes = require('./src/routes/orderItemRoutes/index')

app.use(cors({ origin: process.env.FRONTEND_URL }))

synchDBConnection()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRoutes)
app.use('/brand', brandRoutes)
app.use('/product', productRoutes)
app.use('/image', imageRoutes)
app.use('/review', reviewRoutes)
app.use('/orderitem', orderItemRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})