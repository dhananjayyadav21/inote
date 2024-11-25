const mongoose = require ('mongoose')

const mongoUri = "mongodb://localhost:27017/inotebook"

// const mongoUri = "mongodb+srv://notedocar:notedocar%40atlas.mongodb@notedocar.yuxmn.mongodb.net/"


const conectTomongo = ()=>{
    mongoose.connect(mongoUri).then((data)=>{
        console.log("connected")
    })
}

module.exports = conectTomongo;