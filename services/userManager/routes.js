const { Router } = require('express');
const router = Router();

const { addUser, getUser, updateUser, deleteUser } = require('./controller/controller');




router.post('/user', addUser);
router.get('/user/:id', getUser);
router.put('/user', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;