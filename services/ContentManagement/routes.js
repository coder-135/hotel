const { Router } = require('express');
const router = Router();
const { addContent, uploadImage, getContent, updateContent, deleteContent } = require('./controller/controller');
const { upload } = require('../../utils/uploasLogic')


router.post('/content', addContent);
router.get('/content/:id', getContent);
router.get('/content', getContent);
router.post('/upload', upload.single('photo'), uploadImage);
router.put('/content/:id', updateContent);
router.delete('/content/:id', deleteContent);

module.exports = router;