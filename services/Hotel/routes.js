const {Router} = require('express');
const router = Router();
const {addHotel} = require('./controller/controller')


router.post('/Hotel', addHotel);


module.exports = router;