var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  var params = {
    TableName: dynamo.tableName,
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    }
  };

  return dynamo.raw.createTable(params, cb);

};
