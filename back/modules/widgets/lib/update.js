var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  var data = event.widget;
  data.id = event.id;
  var params = {
    TableName : dynamo.tableName,
    Item:data
  };

  return dynamo.doc.put(params, function(err,data) {
    if (err){
      cb(err);
    }else{
      cb(err,params.Item);
    }
  });

};

