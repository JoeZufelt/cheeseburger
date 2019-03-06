var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(cols, vals, cb) {
    var queryString = "INSERT INTO burgers";

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(objColVals, condition, cb) {
    var queryString = "UPDATE burgers";

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(id, val, cb) {
    var queryString = "DELETE FROM burgers";
    queryString += " WHERE " + id;
    queryString += " = " + val;
    console.log(queryString);
    connection.query(queryString, function(err, result){
      if (err) throw err;
      cb(result);
    });
  }
};



// var orm = {
//     all: function(cb) {
//       var queryString = "SELECT * FROM burgers";
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//     },
//     create: function(valOne, valTwo, cb) {
//       var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)"
//       console.log(queryString);
//       connection.query(queryString, [valOne, valTwo], function(err, result) {
//         if (err) {
//           throw err;
//         }
  
//         cb(result);
//       });
//     },
//     update: function(valOne, val, cb) {
//       var queryString = "UPDATE burgers SET ? WHERE id = ?"
//       console.log(queryString);
//       connection.query(queryString, [valOne, val], function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//     },
//     delete: function(val, cb) {
//       var queryString = "DELETE FROM burgers WHERE id = ?"
//       connection.query(queryString, [val], function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//     }
//   };

// Export the orm object for the model.
module.exports = orm;