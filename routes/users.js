const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        users: [
            {
                name: "João Rosa",
                email: "joao.rosa@saipos.com",
                id: 1,
            },
        ],
    });
});

routes.get("/admin", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        users: [
            {
                name: "João Pedro Rosa",
                email: "joao.rosa@saipos.com",
                admin: "true",
                id: 2,
            },
        ],
    });
});

module.exports = routes;
