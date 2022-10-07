const bl = require('../businesLogic/bl');
const uuid = require('uuid');
const { schema } = require('../../../utils/yup');
const bcrypt = require('bcryptjs');
const moment = require('moment-jalaali');
async function addUser(req, res) {
    try {
        const { body } = req;
        const inputData = await schema.validate({
            id: uuid.v4(),
            fullName: body.fullName,
            email: body.email,
            password: body.password,
            createdAt: moment().format('jYYYY/jMM/jDD -- HH:mm:ss'),
            age: body.age
        });

        const result = await bl.addUser(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }

}
async function getUser(req, res) {
    try {
        let result;
        if (req.query.id)
            result = await bl.getUser({ id: req.query.id });
        else
            result = await bl.getUsers();

        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function updateUser(req, res) {
    try {
        if (!req.body.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وازد نمایید' }
            }
        }
        const inputData = req.body;
        let result = await bl.updateUser(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};
async function deleteUser(req, res) {
    try {
        if (!req.query.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وارد نمایید' }
            }
        }
        const inputData = { id: req.query.id };
        let result = await bl.deleteUser(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
};


module.exports = { addUser, getUser, updateUser, deleteUser };