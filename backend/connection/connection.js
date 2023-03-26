const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
// console.log()
const url=''
async function getconnected(){
    await mongoose.connect(url,(err)=>{
            if(err){
                console.log("Connection failed");
            }
            else{
                console.log("Connection successfully");
            }
        })
}
module.exports = getconnected