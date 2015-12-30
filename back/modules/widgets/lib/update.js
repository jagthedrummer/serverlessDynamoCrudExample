var dynamo = require('./dynamo');

module.exports.respond = function(event, cb) {

  console.log('event---');
  console.log(event);

  var data = event.widget;
  data.id = event.id;
  var params = {
    TableName : dynamo.tableName,
    Item:data
  };

  console.log('params--------');
  console.log(params);
  return dynamo.doc.put(params, function(err,data) {
    if (err){
      console.log("It did not work!");
      console.log(err, err.stack); // an error occurred
      cb(err);
    }else{
      console.log("It worked!");
      console.log(data);           // successful response
      cb(err,data);
    }
  });

};

