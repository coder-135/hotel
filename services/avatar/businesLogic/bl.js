const repo = require('../repository/repository')
const path = require("path");
const uuid = require('uuid').v4;


const setAvatar = async(req) => {
    try {
        const filename = `${req.file.filename}`;
        const inputData = {
            avatarUrl: `http://localhost:5000/uploads/${filename}`
        }

        const result = await repo.updateAvatar(inputData);

        return {
            status: 'success',
            data: result,
            message: 'عکس پروفایل با موفقیت آپدیت شد',
        }
    } catch (err) {
        throw {
            status: 400,
            message: err.message
        }
    }
}
const deleteAvatar = async(inputData) => {
    try {
        await repo.deleteAvatar(inputData);
        return {
            status: 'success',
            message: 'عکس پروفایل با موفقیت حذف شد',
        }
    } catch (err) {
        throw {
            status: 400,
            message: err.message
        }
    }
}
module.exports = { setAvatar, deleteAvatar };
