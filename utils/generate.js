const jwt = require("jsonwebtoken");

const access = (phoneNumber) => {
    const token = jwt.sign({ phoneNumber }, process.env.ACCESS_JWT_SECRET, {
        expiresIn: process.env.ACCESS_JWT_EXPIRES_IN,
    });

    return token;
};
const refresh = (phoneNumber) => {
    const token = jwt.sign({ phoneNumber }, process.env.REFRESH_JWT_SECRET, {
        expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
    });

    return token;
};


module.exports = { access, refresh };