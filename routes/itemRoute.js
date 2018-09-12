const router = require('express').Router();
const { showAll, create, erase, edit } = require('../controllers/itemController');
const { addCategory } = require('../controllers/categoryController');

router.get('/', showAll);
router.post('/', create);
router.delete('/', erase);
router.patch('/', edit);
router.post('/:id', addCategory)


module.exports = router;