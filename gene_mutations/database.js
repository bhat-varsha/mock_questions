const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("mutation.db", (err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to SQLite Database");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS mutation (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        gene_name TEXT,
        mutation_type TEXT
    )
`);

module.exports = db;