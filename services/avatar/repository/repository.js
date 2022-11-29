const config = require('../../../utils/initializer')

const updateAvatar = async(inputData) => {
    await config.mongoDB.collection('users').updateOne({ uid: inputData.id }, { $set: { avatar: inputData.avatarUrl } });
    return await config.mongoDB.collection('users').findOne({ uid: inputData.id }, { projection: { _id: 0, password: 0 } });
}
const deleteAvatar = async(inputData) => {
    await config.mongoDB.collection('users').updateOne({ uid: inputData.id }, { $set: { avatar: 'http://localhost:5000/api/uploads' } });
}

module.exports = { updateAvatar, deleteAvatar };