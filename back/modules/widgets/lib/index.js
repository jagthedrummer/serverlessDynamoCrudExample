var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  var params = {
    TableName: dynamo.tableName
  };

  return dynamo.doc.scan(params, function(err, data) {
    if (err){
      console.log(err, err.stack);
      cb(err);
    }else{
      console.log(data);
      var items = data.Items;
      var newData = {"widgets": items};
      console.log(newData);
      cb(err,newData);
    }
  });
};

