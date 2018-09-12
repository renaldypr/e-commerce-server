const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, ref: 'User',
    required: true
  },
  items: [{    
    type: Schema.Types.ObjectId, ref: 'Item',
    required: true 
  }],
  totalPrice: {
    type: Number
  },
  transactionDate: {
    type: Date
  }
}, {
  timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;