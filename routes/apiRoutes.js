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