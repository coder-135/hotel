const { Router } = require('express');
const router = Router();

const { addUser, getUser, updateUser, deleteUser } = require('./controller/controller');
const { login } = require('../userManager/auth/login');


router.post('/login', login);
router.post('/register', addUser);
router.get('/register', getUser);
router.put('/upload', updateUser);
router.delete('/register', deleteUser);

module.exports = router;