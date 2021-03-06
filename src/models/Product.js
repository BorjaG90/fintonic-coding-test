const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);