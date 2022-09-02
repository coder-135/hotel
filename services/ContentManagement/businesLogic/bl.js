const repository = require("../repository/repository")


async function addContent(inputData) {
  await repository.addContent(inputData);
  delete inputData._id;
  return {
    message: 'مقاله با موفقیت ثبت شد',
    result: inputData
  }
}

async function getContent(inputData) {
  const result = await repository.getContent(inputData);
  if (result.length === 0) {
    throw {
      status: 404,
      error: {message: 'مقاله ای یافت نشد'}
    }
  }

  return {
    message: 'مقاله با موفقیت دریافت شد',
    result: result.length === 1 ? result[0] : result
  }
}

async function updateContent(inputData) {
  const result = await repository.updateContent(inputData);
  if (!result)
    throw {
      status: 404,
      error: {message: 'مقاله ای یافت نشد'}
    }

  return {
    message: 'اطلاعات مقاله با موفقیت ویرایش شد',
    result
  }
}

async function deleteContent(inputData) {
  await repository.deleteContent(inputData);
  return {
    message: 'اطلاعات هتل با موفقیت حذف شد'
  }
}

module.exports = {addContent, getContent, updateContent, deleteContent};


// if(result.length === 1) {
//   return result[0]
// } else {
//   return result
// }
//
// result.length === 1 ? result[0] : result