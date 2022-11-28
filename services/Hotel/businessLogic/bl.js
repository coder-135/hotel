const repository = require('../repository/repository')


async function addHotel(inputData) {
  //ighkhjhjkl
  await repository.addHotel(inputData);
  delete inputData._id;
  return {
    message: 'اطلاعات هتل با موفقیت ثبت شد',
    result: inputData
  }
}

async function getHotels() {
  const result = await repository.getHotels();
  return {
    message: 'اطلاعات هتل ها با موفقیت دریافت شد',
    result
  }
}

async function getHotel(inputData) {
  const result = await repository.getHotel(inputData);
  return {
    message: 'اطلاعات هتل با موفقیت دریافت شد',
    result
  }
}

async function updateHotel(inputData) {
  const result = await repository.updateHotel(inputData);
  return {
    message: 'اطلاعات هتل با موفقیت ویرایش شد',
    result
  }
}
async function deleteHotel(inputData) {
 await repository.deleteHotel(inputData);
  return {
    message: 'اطلاعات هتل با موفقیت حذف شد'
  }
}


module.exports = {addHotel, getHotels, getHotel, updateHotel , deleteHotel}
