// Routes
// =============================================================
function apiRoutes(app) {
    // Search for Specific Character (or all characters) - provides JSON
    app.get("/api/:reservations", function (req, result) {
        var res = req.params.reservations;
        console.log(res);
        return res.json(reservations);
    });

    app.get("/api/:waitlist", function (req, res) {
        var chosen = req.params.characters;
        if (chosen) {
            console.log(chosen);
            for (var i = 0; i < characters.length; i++) {
                if (chosen === characters[i].routeName) {
                    return res.json(characters[i]);
                }
            }
            return res.json(false);
        }
        return res.json(characters);
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