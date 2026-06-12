const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3002;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/add-protein", (req, res) => {

    const { protein_name, protein_function } = req.body;

    db.run(
        "INSERT INTO proteins (protein_name, protein_function) VALUES (?, ?)",
        [protein_name, protein_function],
        function (err) {

            if (err) {
                return res.status(500).send("Database Error");
            }

            res.send("Protein Added Successfully");
        }
    );
});

app.get("/proteins", (req, res) => {

    db.all(
        "SELECT * FROM proteins",
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