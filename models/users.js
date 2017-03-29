var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema ({
  "userName":String,
  "email":String,
  "password":String,
  "salt":String,
});

var User = mongoose.model('Book', bookSchema);

module.exports = User;
