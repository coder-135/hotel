const repository = require('../repository/repository')


async function addHotel(inputData) {
  await repository.addHotel(inputData);
  delete inputData._id;
  return {
    message:'اطلاعات هتل با موفقیت ثبت شد',
    result : inputData
  }
}


module.exports = {addHotel}