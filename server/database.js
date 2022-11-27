const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@1010",
  database: "crud-operations"
});

 module.exports = con;




// let myquery ="select * from bookapp"

// con.connect(function(err) {
//   if (err) throw err;
//   con.query(myquery , function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
