const express = require("express");
const path = require("path");
const db = require("./database");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/add-student", (req, res) => {

    const { name, regno } = req.body;

    db.run(
        "INSERT INTO students (name, regno) VALUES (?, ?)",
        [name, regno],
        function (err) {
            if (err) {
                return res.status(500).send("Database Error");
            }
            res.send("Student Added Successfully");
        }
    );
});
app.get("/students", (req, res) => {

    db.all(
        "SELECT * FROM students",
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