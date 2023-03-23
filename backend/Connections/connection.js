const mongoose = require('mongoose');
// const database = process.env.DBURL;
mongoose.set('strictQuery', false);


const database = "mongodb+srv://priyanka:priyanka@contact.dy0dsad.mongodb.net/ContactsManager?retryWrites=true&w=majority";
mongoose.connect(database,
    { useNewUrlParser: true }
).then(() => {
    console.log("connected to database successful");
}).catch(() => {
    console.log("failed to connect");
})   