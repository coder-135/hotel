const config = require('../../../utils/initializer')

async function addHotel(inputData) {
  await config.mongoDB.collection('hotels').insertOne(inputData);
}


module.exports = {addHotel}