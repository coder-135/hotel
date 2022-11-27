const { Router } = require('express');
const router = Router();
const { uploadAvatar, deleteAvatar } = require('./controller/controller');
const { upload } = require('../../utils/uploasLogic');
const { route } = require('express/lib/application');


router.post('/avatar', upload.single('avatar'), uploadAvatar);
router.delete('/avatar', deleteAvatar)

module.exports = router;