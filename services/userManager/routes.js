const { Router } = require('express');
const router = Router();

const { addUser, getUser, updateUser, deleteUser } = require('./controller/controller');
const { login } = require('../userManager/auth/login');


router.put('/login', login);
router.post('/register', addUser);
router.get('/user', getUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);

module.exports = router;