const repository = require('../repository/repo');

async function addComment(inputData) {
    await repository.addComment(inputData);
    delete inputData._id;
    return {
        message: 'اطلاعات شما با موفقیت ثبت شد',
        result: inputData
    }
}
async function getComments(query) {
    const result = await repository.getComments(query);
    return {
        message: 'success',
        result
    }
}
async function getComment(inputData) {
    const result = await repository.getComment(inputData);
    return {
        message: 'کامنت های این پست با موفقیت دریافت شدند',
        result
    }
}
async function deleteComment(inputData) {
    await repository.deleteComment(inputData);
    return {
        message: 'این کامنت با موفقیت حذف شد '
    }
}


module.exports = { addComment, getComments, getComment, deleteComment };
