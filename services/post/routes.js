const { Router } = require('express');
const router = Router();
const { post, uploadimage, updatepost, deletepost } = require("./controller/controller");
const { upload } = require("../../utils/uploasLogic")

router.post('/post', post);
router.post("/upload", upload.single("photo"), uploadimage);


router.put("/post", updatepost)
router.delete("/post", deletepost)

module.exports = router;