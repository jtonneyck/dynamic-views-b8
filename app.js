const express = require("express");
const app = express();
const nba = require("./nba.json");
const mascots = require("./mascots.json");

app.use(express.static('public'));

var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get("/players", (req,res)=> {
    res.render("home", {
        players: nba
    })
})

app.get("/players/random", (req,res)=> {
    let randomPlayer = nba[Math.floor(Math.random() * nba.length)];
    res.render("single-player", randomPlayer);
})

app.get("/mascots", (req,res)=> {
    res.render("mascots", {mascots: mascots.results, la: "whie"});
})

app.get("/mascots/random", (req,res)=> {
    let randomMascot = mascots.results[Math.floor(Math.random() * nba.length)];
    res.render("single-mascot", randomMascot);
})
app.listen(3000, ()=> {
    console.log("Listening");
})