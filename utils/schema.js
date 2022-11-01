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



module.exports = { registerSchema,loginSchema };