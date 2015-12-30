var AWS = require('aws-sdk');
var dynamoconfig = {};

if(process.env.SERVERLESS_STAGE === 'development'){
  dynamoconfig = {
    endpoint: "http://localhost:8000",
    region: "someregion",
    accessKeyId: "test",
    secretAccessKey: "test"
  }
}

var dynamodb = new AWS.DynamoDB(dynamoconfig);
module.exports.raw = dynamodb;
module.exports.doc = new AWS.DynamoDB.DocumentClient({service:dynamodb});
module.exports.tableName = "widgets-" + process.env.SERVERLESS_STAGE;

