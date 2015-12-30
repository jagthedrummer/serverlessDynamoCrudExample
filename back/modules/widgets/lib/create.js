var dynamo = require('./dynamo');
var uuid = require('uuid');

module.exports.respond = function(event, cb) {

  var data = event.widget;
  data.id = uuid.v1();
  data.createdAt = new Date().getTime();
  data.udatedAt  = data.createdAt;
  var params = {
    TableName : dynamo.tableName,
    Item:data
  };

  return dynamo.doc.put(params, function(err,data) {
    if (err){
      cb(err);
    }else{
      var newData = {"widget": params.Item};
      cb(err,newData);
    }
  });

};

