const jwt = require('jsonwebtoken')
const userRepository = require('../services/userManager/repository/repository')

const config = require('./../utils/initializer');
const { promisify } = require('util');


async function checkAccess(req, res, feature) {

    if (!req.headers.authorization) {
        throw {
            status: 400,
            error: { message: 'توکن ارسال نشده است' },
        };
    }
    const authorization = req.headers.authorization.split('Bearer ');
    if (authorization.length < 2) {
        throw {
            status: 400,
            error: { message: 'Invalid Token!' },
        };
    }
    const token = authorization[1];
    if (!token) throw { status: 400, error: { message: 'Token not provided' } };
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        throw {
            status: 401,
            error: {
                message: 'Token has been expired or invalid token, Please login again',
            },
        };
    }
    if (decodedToken.id === undefined) {
        throw { status: 400, error: { message: 'Token not provided' } };
    }
    const user = await userRepository.findUser({ id: decodedToken.id });
    if (!user) {
        throw {
            status: 401,
            error: { message: 'Token is not valid' },
        };
    }
    const { permissions } = await config.mongoDB.collection('permissions').findOne({ role: user.role });
    if (!(permissions.includes(feature))) {
        throw {
            status: 403,
            data: { message: 'شما اجازه دسترسی به این بخش را ندارید' }
        }
    }
    req.userId = user.id;
    req.role = user.role;

}


module.exports = { checkAccess };