var express = require('express');
var mysql = require('mysql2');
require('dotenv').config({debug:true});

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

var app = express();

con.connect(function(err) {
    if (err) throw err;
    con.query(`SELECT * FROM nagp_table`, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

app.get('/health',  async (req, res) =>{
    res.send("API Service is running with health status OK")
});

app.get('/getData',  async (req, res) =>{
    console.log(req.url);
    try{
        const dbEntries = await con.promise().query("SELECT * FROM nagp_table") || [];
        return res.status(200).json(dbEntries[0]);
    }catch(err){
        return res.status(500).json({
            err:err
        })
    }
});


var server = app.listen(process.env.APP_PORT, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
