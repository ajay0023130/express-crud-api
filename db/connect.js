const mongoose = require('mongoose')
const myString  = "mongodb+srv://ajayadmin:root@cluster0.i6yc4.mongodb.net/Crud-api?retryWrites=true&w=majority"

mongoose.connect(myString)
.then(()=>console.log("Conneted to the database"))
.then((error)=>console.log(error))