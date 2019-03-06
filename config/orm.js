var connection = require("../config/connection.js");

var orm = {
    all: function(cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(valOne, valTwo, cb) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)"
      console.log(queryString);
      connection.query(queryString, [valOne, valTwo], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    update: function(valOne, val, cb) {
      var queryString = "UPDATE burgers SET ? WHERE id = ?"
      console.log(queryString);
      connection.query(queryString, [valOne, val], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    delete: function(val, cb) {
      var queryString = "DELETE FROM burgers WHERE id = ?"
      connection.query(queryString, [val], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };

// Export the orm object for the model.
module.exports = orm;