var hotTable = require('../data/hotTable.js');

// Routes
// =============================================================
function apiRoutes(app) {
    // Search for Specific Character (or all characters) - provides JSON
    app.get("/api/reservations", function (req, result) {
        var res = req.params.hotTable.reservations;
        console.log(res);
        return res.json(hotTable.reservations);
    });

    app.get("/api/waitlist", function (req, res) {
        var waiting = req.params.waitlist;
        console.log(waiting);
        return res.json(waitlist);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/waitlist", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newcharacter = req.body;
        newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log(newcharacter);
        characters.push(newcharacter);
        res.json(newcharacter);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/tables", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newcharacter = req.body;
        newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log(newcharacter);
        characters.push(newcharacter);
        res.json(newcharacter);
    });
}


module.exports = apiRoutes;