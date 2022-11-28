const repository = require('../repository/repository');


async function createQuestion(inputData) {
    await repository.crerateQuestion(inputData);
    delete inputData._id;
    return {
        message: 'اطلاعات شما با موفقیت ثبت شد',
        result: inputData
    }
}
async function getQuestion() {
    const result = await repository.getQuestion();
    return {
        message: 'success',
        result: result[0]
    }
}

module.exports = { createQuestion, getQuestion };
