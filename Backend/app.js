const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

const {databaseConnection} = require('./config/db')

const user = require('./routes/userrouter')
const roomsRouter = require('./routes/roomsRoute')
const house2Router = require('./routes/house2Router')
const house3Router = require('./routes/house3Router')
const bookingrouter = require('./routes/bookingrouter')
const bookingrouter2 = require('./routes/booking2router')
const subscriberouter = require('./routes/subscriberouter')

app.use(express.json())
app.use(cors())

dotenv.config({path:path.join(__dirname,'config','config.env')})
databaseConnection()




app.use('/app/v2/',user)
app.use('/app/rooms/',roomsRouter)
app.use('/app/h2/',house2Router)
app.use('/app/h3/',house3Router)
app.use('/app/booking/',bookingrouter)
app.use('/app/booking2/',bookingrouter2)
app.use('/app/subscribe/',subscriberouter)


app.listen(process.env.PORT,()=>{
    console.log('server is listening on port 5000...');
})