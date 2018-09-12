const Item = require('../models/item');

module.exports = {
  showAll: function(req,res) {
    Item.find((err, items) => {
      if(!err) {
        res.status(200).json({
          message: 'find all item success!',
          data: items
        })
      } else {
        res.status(500).json({
          message: err
        })
      }
    });
  },
  create: function(req,res) {
    Item.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    })
      .then(item => {
        res.status(201).json({
          message: 'item created successfully!',
          data: item
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err
        })
      })
  },
  erase: function(req,res) {
    Item.deleteOne({ _id: req.body.id }, function (err) {
      if(!err) {
        res.status(200).json({
          message: 'item deleted successfully',
        })
      } else {
        res.status(500).json({
          message: err
        })
      }
    });
  },
  edit: function(req,res) {
    Item.findOne({ _id: req.body.id }, function(err,item) {
      if(!err) {
        if(item) {
          item.name = req.body.name
          item.price = req.body.price
          item.description = req.body.description
          item.save()
          res.status(200).json({
            message: 'item edited successfully!'
          })
        } else {
          res.status(404).json({
            message:'item not found!'
          })
        }
      } else {
        res.status(500).json({
          message: err
        })
      }
    })
  }
}