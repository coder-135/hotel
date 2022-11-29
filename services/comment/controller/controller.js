const bl = require('../businesLogic/bl');
const uuid = require('uuid');
const {} = require('../../../utils/accessControl');

async function addComment(req, res) {
    try {
        const { body } = req;
        const inputData = {
            id: uuid.v4(),
            userId: body.userId,
            postId: body.postId,
            author: body.author,
            text: body.text
        }
        const result = await bl.addComment(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}
async function getComments(req, res) {
    try {
        let query = {}

        if (req.query.postId) {
            query.postId = req.query.postId
        }
        if (req.query.userId) {
            query.userId = req.query.userId
        }
        const result = await bl.getComments(query);
        res.send(result);
    } catch (err) {
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}
// async function getComment(req, res) {
//     try {
//         let inputData = {}
//         if (req.params.id) {
//             inputData = { id: req.params.id }
//         }
//         const result = await bl.getComment(inputData);
//         res.send(result);
//     } catch (err) {
//         err.status = err.status || 500;
//         res.status(err.status).send({
//             error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
//         })
//     }
// }

async function deleteComment(req, res) {
    try {
        if (!req.params.id) {
            throw {
                status: 400,
                error: { message: 'شناسه کامنت را ارسال بفرمایید' }
            }
        }
        const inputData = { id: req.params.id };
        let result = await bl.deleteComment(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}
module.exports = { addComment, getComments, deleteComment };