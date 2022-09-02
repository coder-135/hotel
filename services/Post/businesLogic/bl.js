const repository = require("../repository/repository")


async function addpost(inputData) {
    await repository.addpost(inputData);
    delete inputData._id;
    return {
        message: 'اطلاعات هتل با موفقیت ثبت شد',
        result: inputData
    }
}
async function updatepost(inputData) {
    const result = await repository.updatepost(inputData);
    return {
        message: 'اطلاعات هتل با موفقیت ویرایش شد',
        result
    }
}
async function deletepost(inputData) {
    await repository.deletepost(inputData);
    return {
        message: 'اطلاعات هتل با موفقیت حذف شد'
    }
}
module.exports = { addpost, updatepost, deletepost };