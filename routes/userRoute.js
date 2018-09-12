const router = require('express').Router();
const { showAll, create, erase, edit, login } = require('../controllers/userController');

router.get('/', showAll);
router.post('/', create);
router.delete('/', erase);
router.patch('/', edit);
router.post('/login', login)


module.exports = router;