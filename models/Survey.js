const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./RecipientSchema");

const SurverySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yesVotes: { type: Number, default: 0 },
  noVotes: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date,
});

module.exports = mongoose.model("surveys", SurverySchema);
