const bl = require('../businesLogic/bl');
const { checkAccess } = require('../../../utils/accessControl');


const uploadAvatar = async(req, res) => {
    try {
        // await checkAccess(req, res, 'uploadAvatar');
        if (!req.file) throw {
            status: 400,
            message: 'عکسی انتخاب نشده است'
        }
        let result = await bl.setAvatar(req);
        res.status(200).send(result);

    } catch (err) {
        err.status = err.status || 400;
        res.status(err.status).send({
            status: 'fail',
            message: err.message
        })
    }
}
const deleteAvatar = async(req, res) => {
    try {
        // await checkAccess(req, res, 'deleteAvatar');
        const inputData = {
            id: req.id
        }
        let result = await bl.deleteAvatar(inputData);
        res.status(200).send(result);

    } catch (err) {
        err.status = err.status || 400;
        res.status(err.status).send({
            status: 'fail',
            message: err.message
        })
    }
}

module.exports = { uploadAvatar, deleteAvatar };