var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  console.log(event);

  var params = {
    TableName : dynamo.tableName,
    Key: {
      id: event.id
    }
  };


  return dynamo.doc.get(params, function(err, data) {
    if (err){
      console.log(err, err.stack); // an error occurred
      cb(err);
    }else{
      console.log(data);           // successful response
      var item = data.Item;
      var newData = {"widget": item};

      console.log(newData);
      cb(err,newData);
    }
  });
};

