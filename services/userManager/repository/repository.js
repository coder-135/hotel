const config = require('../../../utils/initializer');

async function addUser(inputData) {
    await config.mongoDB.collection('users').insertOne(inputData);
}

async function getUsers() {
    return await config.mongoDB.collection('users').find({}, { projection: { _id: 0 } }).toArray();
}

async function getUser(inputData) {
    return await config.mongoDB.collection('users').findOne({ id: inputData.id }, { projection: { _id: 0 } });
}
async function updateUser(inputData) {
    await config.mongoDB.collection('users').updateOne({ id: inputData.id }, {
        $set: inputData
    });
}
async function deleteUser(inputData) {
    const result = await config.mongoDB.collection('users').deleteOne({ id: inputData.id });
    if (result.deletedCount === 0) {
        throw {
            status: 404,
            error: { message: 'مقاله ای برای حذف کردن یافت نشد' }
        }
    }
}
async function findUser(query) {
    try {
        const user = await config.mongoDB.collection("users").findOne(query, { projection: { _id: 0 } });
        return user;
    } catch (err) {
        throw {
            status: 400,
            message: err.message,
        }
    }
}
module.exports = { addUser, getUser, getUsers, updateUser, deleteUser, findUser };