const router = require('express').Router();
const { showAll, create, erase } = require('../controllers/transactionController');
const { auth } = require('../middlewares/auth');

router.get('/', showAll);
router.post('/', auth, create);
router.delete('/', erase);
// router.patch('/', edit);


module.exports = router;