var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connections = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tray#ram1#',
  database: 'users'
});

router.post('/', function(req, res, next) {
  
  var mobile = req.body.mobile;
  var otp = req.body.otp;

    connection.query(
      "SELECT * FROM users WHERE mobile = ? AND otp = ?",
      [mobile, otp], function (err, row, field){

        if(err){
          console.log(err);
          res.send({ 'success': false, 'message': 'could not connect to db'})
        }

        if (row.length > 0){
          res.send({ 'success': true, 'user': row[0].mobile })
        }
        else{
          res.send({ 'success': false, 'message': 'User not found' });
        }

      }
    )


});

module.exports = router;
