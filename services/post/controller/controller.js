const bl = require("../businesLogic/bl");
const uuid = require("uuid");


async function post(req, res) {
    try {
        const { body } = req;
        if (!body.name) {
            throw {
                status: 400,
                error: { message: 'لطفا نام هتل ارسال نمایید' }
            }
        }
        const inputData = {
            id: uuid.v4(),
            name: body.name,
            body: body.body
        }
        const result = await bl.addpost(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

async function uploadimage(req, res) {
    console.log(req.file);
    if (!req.file) {
        console.log("no file recived");
        return res.send({
            success: false
        });
    } else {
        console.log("file recived");
        return res.send({
            success: true
        });
    }
}
async function updatepost(req, res) {
    try {
        if (!req.body.id) {
            throw {
                status: 400,
                error: { message: 'شناسه هتل را ارسال نمایید' }
            }
        }
        const inputData = req.body;
        let result = await bl.updatepost(inputData);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}
async function deletepost(req, res) {
    try {
        if (!req.query.id) {
            throw {
                status: 400,
                error: { message: 'شناسه هتل را ارسال نمایید' }
            }
        }
        const inputData = { id: req.query.id };
        let result = await bl.deletepost(inputData);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}
module.exports = { post, uploadimage, updatepost, deletepost };