const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("protein.db", (err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to SQLite Database");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS proteins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        protein_name TEXT,
        protein_function TEXT
    )
`);

module.exports = db;