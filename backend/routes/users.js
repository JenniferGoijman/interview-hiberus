const router = require('express').Router();
const UserController = require('../controllers/UserController');
const {authentication} = require('../middleware/authentication.js')

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/user',authentication, UserController.getInfo);
router.get('/logout',authentication, UserController.logout);

module.exports = router;