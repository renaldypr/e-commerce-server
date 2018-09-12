const Category = require('../models/category');

module.exports = {
  showAll: function(req,res) {
    Category.find()
      .populate('items')
      .exec((err, categories) => {
        if(!err) {
          res.status(200).json({
            message: 'find all categories success!',
            data: categories
          })
        } else {
          res.status(500).json({
            message: err
          })
        }
      })
  },
  create: function(req,res) {
    Category.create({
      name: req.body.name,
      items: []
    })
      .then(category => {
        res.status(201).json({
          message: 'category created successfully!',
          data: category
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err
        })
      })
  },
  erase: function(req,res) {
    Category.deleteOne({ _id: req.body.id }, function (err) {
      if(!err) {
        res.status(200).json({
          message: 'category deleted successfully',
        })
      } else {
        res.status(500).json({
          message: err
        })
      }
    });
  },
  edit: function(req,res) {
    Category.findOne({ _id: req.body.id }, function(err,category) {
      if(!err) {
        if(category) {
          category.name = req.body.name
          category.save()
          res.status(200).json({
            message: 'category edited successfully!'
          })
        } else {
          res.status(404).json({
            message:'category not found!'
          })
        }
      } else {
        res.status(500).json({
          message: err
        })
      }
    })
  },
  addCategory: function(req,res) {
    Category.findByIdAndUpdate(
      req.query.categoryId,
      {$push: {"items": req.params.id}},
      {safe: true, upsert: true, new : true},
      function(err, category) {
        if(!err) {
          res.status(200).json({
            message: 'add category success!',
            data: category
          })
        } else {
          res.status(500).json({
            message: err
          })
        }
      }
  );
  }
}