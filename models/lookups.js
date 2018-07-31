const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lookupSchema = new Schema ( {
  qualtype: [
    {
      id: {type: Number},
      value: {type: String}
    }
  ],
  offertype: [
    {
      id: {type: Number},
      value: {type: String}
    }
  ],
  offerstatus: [
    {
      id: {type: Number},
      value: {type: String}
    }
  ]
});

module.exports =  mongoose.model('Lookups', lookupSchema);
