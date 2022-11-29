const config = require('../../../utils/initializer');
async function crerateQuestion(inputData) {
    await config.mongoDB.collection('questions').insertOne(inputData);
}
async function getQuestion() {
    return await config.mongoDB.collection('questions').aggregate([{ $sample: { size: 1 } }], { $project: { _id: 0 } }).toArray();
}

module.exports = { crerateQuestion, getQuestion };