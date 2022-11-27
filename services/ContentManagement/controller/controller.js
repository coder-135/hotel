const bl = require('../businesLogic/bl');
const uuid = require('uuid');
const { contentSchema } = require('../../../utils/schema');
const { validate } = require('../../../utils/validator');
const moment = require('moment-jalaali');
const { checkAccess } = require('../../../utils/accessControl');

async function addContent(req, res) {
    try {
        await checkAccess(req, res, 'addContent');
        const { body } = req;
        await validate(body, contentSchema);
        const inputData = {
            id: uuid.v4(),
            title: body.title,
            text: body.text,
            createAt: moment().format('jYYYYjMMjDD'),
            author: body.author
        }
        const result = await bl.addContent(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function getContent(req, res) {
    try {
        await checkAccess(req, res, 'getContent');
        let inputData = {}
        if (req.params.id) {
            inputData = { id: req.params.id }
        }
        const result = await bl.getContent(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function uploadImage(req, res) {
    if (!req.file) {
        console.log('no file recived');
        return res.send({
            success: false
        });
    } else {
        console.log('file recived');
        return res.send({
            success: true
        });
    }
}

async function updateContent(req, res) {
    try {
        await checkAccess(req, res, 'updateContent');
        if (!req.params.id) {
            throw {
                status: 400,
                error: { message: 'شناسه مقاله را ارسال نمایید' }
            }
        }
        const inputData = {
            ...req.body,
            id: req.params.id
        };
        let result = await bl.updateContent(inputData);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function deleteContent(req, res) {
    try {
        await checkAccess(req, res, 'deleteContent');
        if (!req.params.id) {
            throw {
                status: 400,
                error: { message: 'شناسه مقاله را ارسال نمایید' }
            }
        }
        const inputData = { id: req.params.id };
        let result = await bl.deleteContent(inputData);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

module.exports = { addContent, uploadImage, getContent, updateContent, deleteContent };