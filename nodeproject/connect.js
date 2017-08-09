/**
 * Created by lzc on 2017/8/9.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',port: '3306',user: 'root',password: '',database: 'hnhouses'
})
connection.connect();

var query = 'insert into secondhandhouse (id, source) values ("test", "test2233")'
connection.query(query);