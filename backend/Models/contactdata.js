const mongoose=require('mongoose')
const contactdataSchema=new mongoose.Schema({
    name: {type: String}, 
    designation: String,
    company: String,
    industry:String,
    email:String,
    phonenumber:Number,
    category:String,
    userID:String
})
const contactdata=mongoose.model("contactsdata",contactdataSchema)
module.exports= contactdata