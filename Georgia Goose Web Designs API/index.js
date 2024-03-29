const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
//const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
dotenv.config();
mongoose.set('strictQuery', true);
// connecting to Database

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DBConnection Successful"))
.catch((err)=>{
    console.log(err);
});
//app.get("/api/test", () => {
    //console.log("test is successful");
//});
app.use(express.json());
//app.use("/api/auth", authRoute)
app.use("/api/users", userRoute);

app.listen(process.env.PORT ||5000, () =>{
    console.log("Backend Server Baby!!!"); 
});