var hotTable = require('../data/hotTable.js');

// Routes
// =============================================================
function apiRoutes(app) {
    // Search for Specific Character (or all characters) - provides JSON
    app.get("/api/tables", function (req, res) {
        console.log(res);
        return res.json(hotTable.reservations);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(hotTable.waitlist);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/tables", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        if (hotTable.reservations.length < 5) {
            hotTable.reservations.push(req.body);
            res.json(true);
        } else {
            hotTable.waitlist.push(req.body);
            res.json(false);
        }
    });
}


module.exports = apiRoutes;