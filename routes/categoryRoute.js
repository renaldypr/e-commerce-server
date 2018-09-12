const router = require('express').Router();
const { showAll, create, erase, edit } = require('../controllers/categoryController');

router.get('/', showAll);
router.post('/', create);
router.delete('/', erase);
router.patch('/', edit);

module.exports = router;