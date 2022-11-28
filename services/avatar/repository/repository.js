const config = require('../../../utils/initializer')

const updateAvatar = async(inputData) => {
    try {
        await config.mongoDB.collection('users').updateOne({ id: '1d1ca7b4-0345-480e-b953-f198160ee6c7' }, { $set: { avatar: inputData.avatarUrl } });
        return await config.mongoDB.collection('users').findOne({id: '1d1ca7b4-0345-480e-b953-f198160ee6c7' },{projection:{_id:0,password:0}});
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
