const connection = require('./db.js');

module.exports = {
  getAllFromDB : function (callback) {
    var queryStr = "SELECT * FROM notes;";
    connection.query(queryStr, (err, data)=>{
      if (err) {
        callback(err);
      } else {
        console.log(data);
        callback(null, data);
      }
    });
  }
};
