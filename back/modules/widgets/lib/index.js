var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  var params = {
    TableName: dynamo.tableName
  };

  return dynamo.doc.scan(params, function(err, data) {
    if (err){
      cb(err);
    }else{
      var items = data.Items;
      var newData = {"widgets": items};
      cb(err,newData);
    }
  });
};

