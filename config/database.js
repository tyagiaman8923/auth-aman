const mongoose= require("mongoose");

require("dotenv").config();

exports.connect= () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch((err)=>{
        console.log("db connection issues");
        console.error(err);
        process.exit(1);
    });
}