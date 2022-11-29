const config = require('../../../utils/initializer');

async function addComment(inputData) {
    await config.mongoDB.collection('comments').insertOne(inputData);
}
async function getComments(query) {
    return await config.mongoDB.collection('comments').find(query, { projection: { _id: 0 } }).toArray();
}
// async function getComment(inputData) {
//     return await config.mongoDB.collection('comments').find({ postId: inputData.id }, { projection: { _id: 0 } }).toArray();
// }
async function deleteComment(inputData) {
    const result = await config.mongoDB.collection('comments').deleteOne({ id: inputData.id });
    if (result.deletedCount === 0) {
        throw {
            status: 404,
            error: { message: 'مقاله ای برای حذف کردن یافت نشد' }
        }
    }
}












module.exports = { addComment, getComments, deleteComment };