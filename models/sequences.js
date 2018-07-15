const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SequenceSchema = new Schema(
  {
  _id:{type: String},
  seq: {type:Number}
});

module.exports = mongoose.model("Sequences", SequenceSchema);
