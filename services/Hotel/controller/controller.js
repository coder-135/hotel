const bl = require('../businessLogic/bl')
const uuid = require('uuid');

async function addHotel(req, res) {
  try {
    const {body} = req;
    //todo validation yup
    if (!body.name) {
      throw {
        status: 400,
        error: {message: 'لطفا نام هتل ارسال نمایید'}
      }
    }
    const hotelData = {
      id: uuid.v4(),
      name: body.name,
      address: body.address,
      star: body.star,
      city: body.city
    }
    const result = await bl.addHotel(hotelData);
    res.send(result);
  } catch (err) {
    err.status = err.status || 500;
    res.status(err.status).send({
      error: err.error || {message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید'},
    })
  }
}


module.exports = {addHotel}