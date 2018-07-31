const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sequences = require('./sequences');

const OfferSchema = new Schema( {
    id: {type: Number},
    code: {type: String},
    name: {type: String},
    description: {type: String},
    type: {type: String},
    status: {type: String},
    startDate: {type: Date},
    endDate: {type: Date},
    qualifiers: [{
        id: {type: Number},
        type: {type: String},
        valueId: {type: Number},
        name: {type: String}
      }],
    modifiers: [{
        id: {type: Number},
        itemId: {type: Number},
        itemDescription: {type: String},
        limit: {type: Number},
        currency: {type: String},
        price: {type: Number},
        discountType: {type: String},
        discountValue: {type: Number}
    }]
});

OfferSchema.pre('save', function(next){
  console.log(".................. pre save of offer .................");
  var doc = this;
  console.log(JSON.stringify(this));
  sequences.findByIdAndUpdate({_id: 'offer'}, {$inc: { seq: 1} }, function(error, counter)   {
        console.log("..........In callback of sequences...............");
        if(error)
            return next(error);
        doc.id = counter.seq;
        next();
    });
});

module.exports = mongoose.model('Offers', OfferSchema);
