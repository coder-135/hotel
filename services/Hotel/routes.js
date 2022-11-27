const { Router } = require('express');
const router = Router();
const { addHotel, getHotel, updateHotel, deleteHotel } = require('./controller/controller')


router.post('/hotel', addHotel);
router.get('/hotel/:id', getHotel);
router.put('/hotel/:id', updateHotel);
router.delete('/hotel/:id', deleteHotel);


module.exports = router;