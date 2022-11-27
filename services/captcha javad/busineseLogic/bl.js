const repository = require('../repository/repository');


async function createQuestion(inputData) {
    await repository.crerateQuestion(inputData);
    delete inputData._id;
    return {
        message: 'اطلاعات شما با موفقیت ثبت شد',
        result: inputData
    }
}
async function getQuestion(inputData) {
    const result = await repository.getQuestion(inputData);
    return {
        message: 'success',
        result
    }
}

module.exports = { createQuestion, getQuestion };