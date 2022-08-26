const {Router} = require('express');
const router = Router();
const {addHotel,getHotel,updateHotel,deleteHotel} = require('./controller/controller')


router.post('/hotel', addHotel);
router.get('/hotel', getHotel);
router.put('/hotel', updateHotel);
router.delete('/hotel', deleteHotel);


module.exports = router;
