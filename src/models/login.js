const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    fname : {
        type : String
    },
    lname : {
        type : String
    },
    uname : {
        type : String
    },
    mail : {
        type : String
    },
    pass : {
        type : String
    },
    cpass : {
        type : String
    }
});

const Login = new mongoose.model("Login",newSchema);
module.exports = Login;