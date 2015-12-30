/**
 * Lib
 */

module.exports.index = function(event, cb) {

  var response = {
    message: "Index ran successfully!",
    event: event
  };

  return cb(null, response);
};

module.exports.show = function(event, cb) {

  var response = {
    message: "Show ran successfully!",
    event: event
  };

  return cb(null, response);
};
