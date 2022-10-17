const bl = require('../businessLogic/bl');
const uuid = require('uuid');
const { schema } = require('../../../utils/yup');
const bcrypt = require('bcryptjs');
const moment = require('moment-jalaali');
const {checkAccess} = require('../../../utils/accessControl');

async function register(req, res) {
    try {
        const { body } = req;
        const inputData = await schema.validate({
            id: uuid.v4(),
            fullName: body.fullName,
            email: body.email,
            password: body.password,
            createdAt: moment().format('jYYYY/jMM/jDD -- HH:mm:ss'),
            age: body.age,
            role: 'USER'
        });

        const result = await bl.register(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }

}

async function login(req, res) {
    try {
        if (!req.body.email || !req.body.password)
            throw {
                data: {
                    message: "نام کاربری یا گذرواژه ارسال نشده است"
                }
            }
        const inputData = {
            email: req.body.email,
            password: req.body.password
        }
        let result = await bl.login(inputData);
        res.status(200).send(result);
    } catch (err) {
        const status = err.status || 400;
        res.status(status).send({
            status: "fail",
            data: err.data
        });
    }
};

module.exports = { login, register };