module.exports = (app) => {
    app.get("/users", (req, res) => {
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

    app.get("/users/admin", (req, res) => {
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
};
