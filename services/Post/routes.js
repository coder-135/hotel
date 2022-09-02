const { Router } = require('express');
const router = Router();
const { post, uploadimage, updatepost, deletepost } = require("./controller/controller");
const { upload } = require("../../utils/uploasLogic")

router.post('/Post', post);
router.post("/upload", upload.single("photo"), uploadimage);


router.put("/Post", updatepost)
router.delete("/Post", deletepost)

module.exports = router;