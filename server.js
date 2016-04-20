var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/tennis_fantasy');  //server name


var Player = require("./schemas/playerSchema");
var User = require("./schemas/userSchema");
var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(express.static('node_modules'));


app.listen(8000);


app.get('/players', function (req, res) {
  // Beer arrives from schema. here we find the beers that are inside the database birot
  Player.find(function (error, whatsinsidethedb) {
    // console.log("test");
    // console.log(beers);
    

    // sends back to the collection and fires reset event
    res.send(whatsinsidethedb);
  });
});


app.post('/players', function (req, res) {
  // console.log(req.body.currentRank);
  var player = new Player(req.body);
  player.save();
});

app.get('/users', function(req,res) {
  User.find(function(error,users) {
    res.send(users);
  });
});

app.post('/users', function(req,res) {
  // console.log(req.body.teamCollection);
  var user = new User(req.body);
  user.save();
});