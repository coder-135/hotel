const yup = require('yup');

let schema = yup.object().shape({
    fullName: yup.string().required('full name is required'),
    email: yup.string().email().required('please enter your email'),
    password: yup.string().required('please enter your password because password is required'),
    age: yup.number().required('please enter yoyr age').positive().integer(),
});

module.exports = { schema };