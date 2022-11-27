const { Router } = require('express');
const router = Router();
const { addComment, getComments, getComment, deleteComment } = require('./controller/controller');

router.post('/comment', addComment);
router.get('/comment', getComments);
router.get('/comment/:id', getComment);
router.delete('/comment/:id', deleteComment);

module.exports = router;