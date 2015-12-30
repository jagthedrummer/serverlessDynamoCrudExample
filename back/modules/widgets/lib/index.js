/**
 * Lib
 */

var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  var params = {
    TableName: dynamo.tableName
  };

  return dynamo.doc.scan(params, function(err, data) {
    if (err){
      console.log(err, err.stack); // an error occurred
      cb(err);
    }else{
      console.log(data);           // successful response
      var items = data.Items;
      var newData = {"widgets": items};

      console.log(newData);
      cb(err,newData);
    }
  });
};

