const bl = require('../businesLogic/bl');
const uuid = require('uuid');
const { addUserSchema } = require('../../../utils/schema');
const { validate } = require('../../../utils/validator');
const bcrypt = require('bcryptjs');
const moment = require('moment-jalaali');
const { checkAccess } = require('../../../utils/accessControl');

async function addUser(req, res) {
    try {
        await checkAccess(req, res, 'addUser');
        const { body } = req;
        await validate(body, addUserSchema);
        const inputData = {
            id: uuid.v4(),
            fullName: body.fullName,
            email: body.email,
            password: body.password,
            createdAt: moment().format('jYYYY/jMM/jDD -- HH:mm:ss'),
            age: body.age,
            role: 'ADMIN'
        };

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
        await checkAccess(req, res, 'getUser');
        let result;
        if (req.role === 'USER')
            req.params.id = req.userId;
        if (req.params.id)
            result = await bl.getUser({ id: req.params.id });
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
}

async function updateUser(req, res) {
    try {
        await checkAccess(req, res, 'updateUser');
        if (!req.query.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وازد نمایید' }
            }
        }

        const inputData = {
            id: req.role === 'USER' ? req.userId : req.query.id,
            ...req.body
        };
        let result = await bl.updateUser(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function deleteUser(req, res) {
    try {
        await checkAccess(req, res, 'deleteUser');
        if (!req.params.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کاربر را وارد نمایید' }
            }
        }
        const inputData = { id: req.params.id };
        let result = await bl.deleteUser(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}


module.exports = { addUser, getUser, updateUser, deleteUser };