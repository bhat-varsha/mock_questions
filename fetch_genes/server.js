const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3003;

app.use(express.static(path.join(__dirname, "public")));

app.get("/genes", (req, res) => {

    db.all(
        "SELECT * FROM genes",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).send(err.message);
            }

            res.json(rows);
        }
    );

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});