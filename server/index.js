"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send({ success: true });
});
app.get('/cong/:a/:b', function (req, res) {
    var params = req.params;
    res.send({ success: true, result: +params.a + +params.b });
});
app.listen(3000, function () { return console.log('Server started.'); });
