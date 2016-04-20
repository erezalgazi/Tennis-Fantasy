var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playerSchema = new Schema({
  name: {type: String},
  currentRank: {type: Number},
  rankGroup: {type: Number},
  points: {type: Number}
});

var Player = mongoose.model("Player", playerSchema);
module.exports = Player;
