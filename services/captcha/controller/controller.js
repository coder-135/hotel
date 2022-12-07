const bl = require('../busineseLogic/bl');
const uuid = require('uuid');

async function createQuestion(req, res) {
    try {
        const { body } = req;
        const inputData = {
            id: uuid.v4(),
            question: body.question,
            answer: body.answer
        };

        const result = await bl.createQuestion(inputData);
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }

}
async function getQuestion(req, res) {
    try {
        let result;
        result = await bl.getQuestion();
        res.send(result);
    } catch (err) {
        console.log(err)
        err.status = err.status || 500;
        res.status(err.status).send({
            error: err.error || { message: 'مشکلی برای سرور رخ داده است لطفا پیگیری نمایید' },
        })
    }
}

module.exports = { createQuestion, getQuestion };