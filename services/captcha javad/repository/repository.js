const config = require('../../../utils/initializer');
async function crerateQuestion(inputData) {
    await config.mongoDB.collection('questions').insertOne(inputData);
}
async function getQuestion(inputData) {
    return await config.mongoDB.collection('questions').findOne({ id: inputData.id }, { projection: { _id: 0, answer: 0, role: 0 } });
}

module.exports = { crerateQuestion, getQuestion };