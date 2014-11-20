/**
 * Reads staff credits from local JSON file and passes to view
 * Reports duration to admin panel
 */

modules.export = function(nodecg) {
    var express = require('express'),
        app = express(),
        fs = require('fs');

    app.post('/gxl-credits/update', function(req, res) {
        try {
            var credits = JSON.parse(fs.readFileSync('bundles/gxl-credits/staff.json', 'utf8'));

            res.status(200).json(credits);
        } catch (e) {
            res.status(500).send(e);
        }
    });

    return app;
}
