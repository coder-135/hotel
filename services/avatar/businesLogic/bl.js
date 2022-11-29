const repo = require('../repository/repository')
const path = require("path");
const uuid = require('uuid').v4;


const setAvatar = async(req) => {

    const filename = `${req.file.filename}`;
    const inputData = {
        avatarUrl: `http://localhost:5000/uploads/${filename}`
    }

    const result = await repo.updateAvatar(inputData);

    return {
        status: 'success',
        result,
        message: 'عکس پروفایل با موفقیت آپدیت شد',
    }

}
const deleteAvatar = async(inputData) => {

    await repo.deleteAvatar(inputData);
    return {
        status: 'success',
        message: 'عکس پروفایل با موفقیت حذف شد',
    }

}
module.exports = { setAvatar, deleteAvatar };