exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello World1!!!!"
    }

    callback(null, result);
  };
