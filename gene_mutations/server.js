const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/add-mutation", (req, res) => {
    const { gene_name, mutation_type } = req.body;
    db.run(
        "INSERT INTO mutation (gene_name, mutation_type) VALUES (?, ?)",
        [gene_name, mutation_type],
        function (err) {
            if (err) {
                return res.status(500).send("Database Error");
            }
            res.send("Mutation Added Successfully");
        }
    );
});
app.get("/mutations", (req, res) => {
    db.all(
        "SELECT * FROM mutation",
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