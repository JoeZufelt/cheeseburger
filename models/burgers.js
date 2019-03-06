// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(valOne, valTwo, cb) {
      orm.create(valOne, valTwo, function(res) {
        cb(res);
      });
    },
    update: function(valOne, val, cb) {
      orm.update(valOne, val, function(res) {
        cb(res);
      });
    },
    delete: function(val, cb) {
      orm.delete(val, function(res) {
        cb(res);
      });
    }
  };

// Export the database functions for the controller (catsController.js).
module.exports = burgers;