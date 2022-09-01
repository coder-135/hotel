const config = require("../../../utils/initializer");

async function addpost(inputData) {
    await config.mongoDB.collection('posts').insertOne(inputData);
}
async function updatepost(inputData) {
    await config.mongoDB.collection('posts').updateOne({ id: inputData.id }, {
        $set: inputData
    });
    return await config.mongoDB.collection('posts').findOne({ id: inputData.id }, { projection: { _id: 0 } });
}
async function deletepost(inputData) {
    //todo validate existence of hotel
    await config.mongoDB.collection('posts').deleteOne({ id: inputData.id }, { projection: { _id: 0 } });
}

module.exports = { addpost, updatepost, deletepost }