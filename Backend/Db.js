const mongoose = require ('mongoose')

const mongoUri = "mongodb://localhost:27017/"

const conectTomongo = ()=>{
    mongoose.connect(mongoUri).then((data)=>{
        console.log("connected")
    })
}

module.exports = conectTomongo;