const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    _id: Schema.Types.ObjectId,
    productName: String,
    expirationDate: Date,
    count: Number,
    memo: String,
    refrigerator: { type: Schema.Types.ObjectId, ref: 'Refrigerator' },
    category: String
  });

module.exports = mongoose.model('Ingredient', IngredientSchema);