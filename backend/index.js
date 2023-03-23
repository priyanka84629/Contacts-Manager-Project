const express = require('express')
require('./connections/connection')
// const dotenv = require("dotenv").config();
const signupRoute = require('./routes/Signup')
const signinRoute = require('./routes/Signin')



const app = express();

const port = process.env.PORT || 3500;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/',signupRoute);
app.use('/',signinRoute);

app.get('/', (req, res) => {
    res.send('Everything is fine')
});



app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});