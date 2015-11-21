var mongoose = require("mongoose");
var Schema = mongoose.Schema;

user = mongoose.model("User",
  new Schema({name: String, password: String})
);

module.exports = user