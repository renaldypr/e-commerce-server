const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: [{    
    type: Schema.Types.ObjectId, ref: 'Item'   
  }]
}, {
  timestamps: true
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;