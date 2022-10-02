const repository = require('../repository/repository');
const bcrypt = require('bcryptjs');



async function addUser(inputData) {
    let { password } = inputData;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, async(err, hash) => {
            if (err) throw err;
            await ({...inputData, password: hash });
        })
    })

    await repository.addUser(inputData);
    delete inputData._id;
    return {
        message: 'اطلاعات شما با موفقیت ثبت شد',
        result: inputData
    }
}

async function getUsers() {
    const result = await repository.getUsers();
    return {
        message: 'اطلاعات کاربران با موفقیت دریافت شد',
        result
    }
}

async function getUser(inputData) {
    const result = await repository.getUser(inputData);
    return {
        message: 'اطلاعات کاربر با موفقیت دریافت شد',
        result
    }
}
async function updateUser(inputData) {
    const result = await repository.updateUser(inputData);
    return {
        message: 'اطلاعات هتل با موفقیت ویرایش شد',
        result
    }
}
async function deleteUser(inputData) {
    await repository.deleteUser(inputData);
    return {
        message: 'اطلاعات هتل با موفقیت حذف شد'
    }
}
module.exports = { addUser, getUser, getUsers, updateUser, deleteUser };