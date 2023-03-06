const mongoose = require('mongoose')

const url = 'mongodb+srv://ferrandignacio:Iafm8187@cluster0.9dydcom.mongodb.net/coderhause?retryWrites=true&w=majority'
const dbConnection = async()=>{
    return await mongoose.connect(url)
}


module.exports = { dbConnection }