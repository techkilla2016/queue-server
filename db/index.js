require('dotenv').config()
const mongoose = require('mongoose')
const URL = process.env.DB_URL
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
}).then(res => {
    console.log('connect')
}).catch(error => {
    console.log(error)
})