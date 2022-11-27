const repo = require('../repository/repository')
const path = require("path");
const uuid = require('uuid').v4;


const setAvatar = async(req) => {
    try {
        const filename = `${req.file.filename}`;
        const inputData = {
            id: req.id,
            avatarUrl: `https://localhost:5000/uploads/${filename}`
        }

        await repo.updateAvatar(inputData);

        return {
            status: 'success',
            data: inputData,
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