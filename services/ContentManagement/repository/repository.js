const config = require("../../../utils/initializer");

async function addContent(inputData) {
    await config.mongoDB.collection('contents').insertOne(inputData);
}

async function getContent(inputData) {
    return await config.mongoDB.collection('contents').find(inputData, { projection: { _id: 0 } }).toArray();
}

async function updateContent(inputData) {
    await config.mongoDB.collection('contents').updateOne({ id: inputData.id }, {
        $set: inputData
    });
    return await config.mongoDB.collection('contents').findOne({ id: inputData.id }, { projection: { _id: 0 } });
}

async function deleteContent(inputData) {
    const result = await config.mongoDB.collection('contents').deleteOne({ id: inputData.id });
    if (result.deletedCount === 0) {
        throw {
            status: 404,
            error: { message: 'مقاله ای برای حذف کردن یافت نشد' }
        }
    }
}

module.exports = { addContent, getContent, updateContent, deleteContent }