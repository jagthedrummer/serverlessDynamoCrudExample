var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  var params = {
    TableName : dynamo.tableName,
    Key: {
      id: event.id
    }
  };

  return dynamo.doc.get(params, function(err, data) {
    if (err){
      cb(err);
    }else{
      var item = data.Item;
      var newData = {"widget": item};

      cb(err,newData);
    }
  });
};

