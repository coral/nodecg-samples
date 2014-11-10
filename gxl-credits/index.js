/**
 * Reads staff credits from local JSON file and passes to view
 * Reports duration to admin panel
 */

var express = require('express'),
    app = module.exports = express(),
    io = require('../../server.js'),
    fs = require('fs');

app.post('/gxl-credits/update', function(req, res) {
    try {
        var credits = JSON.parse(fs.readFileSync('bundles/gxl-credits/staff.json', 'utf8'));

        res.status(200).json(credits);
    } catch (e) {
        res.status(500).send(e);
    }
});
