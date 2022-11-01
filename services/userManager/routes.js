const { Router } = require('express');
const router = Router();

const { addUser, getUser, updateUser, deleteUser } = require('./controller/controller');




router.post('/user', addUser);
router.get('/user', getUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);

module.exports = router;