const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const uri = "";
async function getConnection() {
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to database is failed");
        }
        else{
            console.log("Connection to database is successfull");
        }
    })
}
module.exports = getConnection