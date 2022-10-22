const express = require("express");
var morgan = require('morgan');
var path = require("path");
const Joi = require('joi');

const homeController = require('./controllers/home')
var app = express();
var port = 3001;

// app.use(morgan('combined'));


app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use(express.urlencoded());
app.use(express.json());

app.set("view engine", "ejs");

app.set("views", "./views");

var schema = Joi.object({
    email: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
})

app.get('/', (res, rep)=>{
    rep.render("login", {title: "Home", error: false});
})

app.post('/', homeController.index)

app.get('/about', (res, rep) => {
    rep.render("about", {title: "Abouts"});
})

app.listen(port, ()=>{
    console.log("Server da start!")
})