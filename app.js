const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

app.use(cookieParser());

/*app.get("/", function(req,res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("poploo", salt, function(err, hash) {
            console.log(hash);
        });
    });
})
app.get("/", function(req,res){
    bcrypt.compare("poploo", "$2b$10$r2MKpOgEJbL7LqWchwnPZuzuYv0zZ.xd6BAwMzjAdkE.4KOWXpYza", function(err, result) {
        console.log(result);
    });
})*/

app.get("/",function(req,res){
    let token = jwt.sign({ email: "d@gmail.com"}, "shhh");
    res.cookie("token", token)
    res.send("done")
})

app.get("/read",function(req,res){
    let data = jwt.verify(req.cookies.token, "shhh");
    console.log(data);
    res.send("fgh")
})


app.listen(3005);