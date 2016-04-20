var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  teamCollection: {type: Array} //this name must be the same name as in the userModel key, otherwise the post will not work
});

var User = mongoose.model("User", userSchema);
module.exports = User;
