var mysql = require("mysql");
var config = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "ShiShiJie990413",
    database: "1609b"
}
var pool = mysql.createPool(config);

module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];
    pool.getConnection((error, conest) => {
        if (error) {
            fn(error)
        } else {
            conest.query((err, result) => {
                conest.release();
                if (err) {
                    fn(err)
                } else {
                    fn(null, result)
                }
            })
        }
    })
}