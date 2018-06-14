"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send({ success: true });
});
app.get('/cong/:a/:b', (req, res) => {
    const params = req.params;
    res.send({ success: true, result: +params.a + +params.b });
});
app.listen(3000, () => console.log('Server started.'));
