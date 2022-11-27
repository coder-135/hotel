const yup = require('yup');

const registerSchema = yup.object().shape({
    fullName: yup.string().required('full name is required'),
    email: yup.string().email().required('please enter your email'),
    password: yup.string().required('please enter your password because password is required'),
    age: yup.number().required('please enter your age').positive().integer(),
});

const loginSchema = yup.object().shape({
    email: yup.string().email().required('please enter your email'),
    password: yup.string().required('please enter your password because password is required'),
});
const contentSchema = yup.object().shape({
    title: yup.string().required('the title is required'),
    text: yup.string().required('text is required'),
    author: yup.string().required('please enter the name of author')
})
const hotelSchema = yup.object().shape({
    name: yup.string().required('please enter name'),
    address: yup.string().required('please enter the address'),
    star: yup.string(),
    city: yup.string().required('please enter the city')
})
const addUserSchema = yup.object().shape({
    fullName: yup.string().required('full name is required'),
    email: yup.string().email().required('please enter your email'),
    password: yup.string().required('please enter your password because password is required'),
    age: yup.number().required('please enter your age').positive().integer(),
});

module.exports = { registerSchema, loginSchema, contentSchema, hotelSchema, addUserSchema };