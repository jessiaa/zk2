var express = require('express');
var router = express.Router();
var query = require("../mysql/mysql.js")
var sql = require("../mysql/sql.js");
/* GET users listing. */
router.get('/', function(req, res, next) {

    res.send('respond with a resource');

});

router.get("/api/data", function(req, res, next) {
    query(sql.selece_all, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: { err } })
        } else {
            console.log(result)
            res.json({ code: 1, msg: { result } })
        }
    })
})

module.exports = router;