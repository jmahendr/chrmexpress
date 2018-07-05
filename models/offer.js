const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferSchema = new Schema( {
    id: {type: Number},
    code: {type: String},
    name: {type: String},
    description: {type: String},
    type: {type: String},
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

module.exports = mongoose.model('Offers', OfferSchema);
