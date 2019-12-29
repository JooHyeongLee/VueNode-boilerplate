var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  email: String,
  password: String
});

var Member = mongoose.model("Member", MemberSchema);
module.exports = Member;
