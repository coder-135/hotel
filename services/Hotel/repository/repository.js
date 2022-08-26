const config = require('../../../utils/initializer')

async function addHotel(inputData) {
  await config.mongoDB.collection('hotels').insertOne(inputData);
}

async function getHotels() {
  return await config.mongoDB.collection('hotels').find({}, {projection: {_id: 0}}).toArray();
}

async function getHotel(inputData) {
  return await config.mongoDB.collection('hotels').findOne({id: inputData.id}, {projection: {_id: 0}});
}



async function  updateHotel(inputData) {
   await config.mongoDB.collection('hotels').updateOne({id: inputData.id}, {
    $set: inputData
  });
  return await config.mongoDB.collection('hotels').findOne({id: inputData.id}, {projection: {_id: 0}});
}

async function deleteHotel(inputData) {
  //todo validate existence of hotel
   await config.mongoDB.collection('hotels').deleteOne({id: inputData.id}, {projection: {_id: 0}});
}

module.exports = {addHotel, getHotels, getHotel,updateHotel,deleteHotel}