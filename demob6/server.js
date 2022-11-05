const express = require("express");
const path = require("path");
const homeController = require('./controllers/home');

var app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "node_modules/bootstrap")))

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (res, rep)=>{
    rep.render("index");
})

app.get('/contact', (res, rep)=>{
    console.log(res.params);
    rep.render("contact");
})



app.post('/contact', homeController.contact)

app.listen("3000", ()=>{
    console.log("Server started!")
})
