const Transaction = require('../models/transaction');

module.exports = {
  showAll: function(req,res) {
    Transaction.find()
      .populate('user')
      .populate('items')
      .exec((err, transactions) => {
        if(!err) {
          res.status(200).json({
            message: 'find all transactions success!',
            data: transactions
          })
        } else {
          res.status(500).json({
            message: err
          })
        }
      })
  },
  create: function(req,res) {
    Transaction.create({
      user: req.decoded.id,
      items: req.body.items,
      totalPrice: req.body.totalPrice,
      transactionDate: new Date()
    })
      .then(transaction => {
        res.status(201).json({
          message: 'transaction created successfully!',
          data: transaction
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err
        })
      })
  },
  erase: function(req,res) {
    Transaction.deleteOne({ _id: req.body.id }, function (err) {
      if(!err) {
        res.status(200).json({
          message: 'transaction deleted successfully',
        })
      } else {
        res.status(500).json({
          message: err
        })
      }
    });
  },
  // edit: function(req,res) {
  //   User.findOne({ _id: req.body.id }, function(err,user) {
  //     if(!err) {
  //       if(user) {
  //         user.name = req.body.name
  //         user.password = req.body.password
  //         user.save()
  //         res.status(200).json({
  //           message: 'user edited successfully!'
  //         })
  //       } else {
  //         res.status(404).json({
  //           message:'user not found!'
  //         })
  //       }
  //     } else {
  //       res.status(500).json({
  //         message: err
  //       })
  //     }
  //   })
  // }
}