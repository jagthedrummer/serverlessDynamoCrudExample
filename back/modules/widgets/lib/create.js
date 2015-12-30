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
      console.log("It did not work!");
      console.log(err, err.stack); // an error occurred
      cb(err);
    }else{
      console.log("It worked!");
      console.log(data);           // successful response
      var newData = {"widget": params.Item};
      cb(err,newData);
    }
  });

};

