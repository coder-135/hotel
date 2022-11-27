const config = require('../../../utils/initializer')

const updateAvatar = async(inputData) => {
    try {
        await config.mongoDB.collection('users').updateOne({ uid: inputData.id }, { $set: { avatar: inputData.avatarUrl } });
    } catch (err) {
        throw {
            status: 400,
            message: err.message
        }
    }
}
const deleteAvatar = async(inputData) => {
    try {
        await config.mongoDB.collection('users').updateOne({ uid: inputData.id }, { $set: { avatar: 'https://localhost:5000/api/uploads' } });
    } catch (err) {
        throw {
            status: 400,
            message: err.message
        }
    }
}

module.exports = { updateAvatar, deleteAvatar };