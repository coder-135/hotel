const bl = require('../businessLogic/bl')
const uuid = require('uuid');
const {checkAccess} = require('../../../utils/accessControl')

async function addHotel(req, res) {
    try {
        await checkAccess(req,res,'addHotel')
        const { body } = req;
        //todo validation yup
        if (!body.name) {
            throw {
                status: 400,
                error: { message: 'لطفا نام هتل ارسال نمایید' }
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
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function getHotel(req, res) {
    try {
        await checkAccess(req,res,'getHotel')
        let result;
        if (req.query.id)
            result = await bl.getHotel({ id: req.query.id });
        else
            result = await bl.getHotels();

        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function updateHotel(req, res) {
    try {
        await checkAccess(req,res,'updateHotel')
        if (!req.body.id) {
            throw {
                status: 400,
                error: { message: 'شناسه هتل را ارسال نمایید' }
            }
        }
        const inputData = req.body;
        let result = await bl.updateHotel(inputData);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function deleteHotel(req, res) {
    try {
        await checkAccess(req,res,'deleteHotel')
        if (!req.query.id) {
            throw {
                status: 400,
                error: { message: 'شناسه هتل را ارسال نمایید' }
            }
        }
        const inputData = { id: req.query.id };
        let result = await bl.deleteHotel(inputData);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

module.exports = { addHotel, getHotel, updateHotel, deleteHotel }