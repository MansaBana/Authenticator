const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");

const Login = require("./models/login")

const port = process.env.PORT || 3000;

const static_path = path.join(
    __dirname,"../public"
);
const template_path = path.join(
    __dirname,"../views"
);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);

app.get("/",(req,res) =>{
    res.render("index")
});
app.get("/login",(req,res)=>{
    res.render("index");
});
app.post("/logout",async(req,res)=>{
    try{
        res.render("index");
    }catch(error){
        req.status(400).send("invalid");
    }
});
app.get("/logout",(req,res)=>{
    res.render("index");
});
app.post("/login",async(req,res)=>{
    try{
        const name = req.body.name;
        const pass = req.body.pass;
        const mail = await Login.findOne({mail:name});
        if(mail !== null)
        {
            if(mail.pass === pass)
            {res.render("logout");}
            else
            {console.log(`invalid userid password`);res.render("index");}
        }
        else
        {
            const uname = await Login.findOne({uname:name});
            if(uname !== null)
            {
                if(uname.pass === pass)
                {res.render("logout");}
                else
                {console.log(`invalid userid password`);res.render("index");}
            }
            else
            {console.log(`invalid userid password`);res.render("index");}
        }
    }catch(error){
        req.status(400).send("invalid");
    }
});
app.get("/register",(req,res)=>{
    res.render("index");
});
app.post("/register",async(req,res)=>{
    try{
        const ffname = await Login.findOne({uname:req.body.uname});
        const email = await Login.findOne({mail:req.body.email});
        if(ffname === null && email === null)
        {
            if(req.body.pass === req.body.cpass)
            {
                const gghhda = new Login({
                    fname : req.body.fname,
                    lname : req.body.lname,
                    uname : req.body.uname,
                    mail : req.body.email,
                    pass : req.body.pass,
                    cpass : req.body.cpass
                });
                const registered = gghhda.save();
                res.status(201).render("index");
            }
            else
            {
                console.log(`password and confirm password don't match`);
                res.status(201).render("index");
            }
        }
        else
        {
            console.log(`username or email already exist`);
            res.status(201).render("index");
        }
    }catch(error){
        res.status(400).send(error);
    }
});
app.listen(port,() =>{
    console.log(`fgt`);
});