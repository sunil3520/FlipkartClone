const mongoose = require('mongoose');
const env=require("dotenv");
env.config();


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://sunilchaudhary:sunilchaudhary@cluster0.pf95sdj.mongodb.net/Flipkart-Datas?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;