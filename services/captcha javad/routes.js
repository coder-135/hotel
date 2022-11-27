const { Router } = require("express");
const router = Router();
const { createQuestion, getQuestion } = require('./controller/controller');

router.post('/captcha', createQuestion);
router.get('/captcha', getQuestion)

module.exports = router;