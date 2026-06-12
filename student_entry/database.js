const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("student.db", 
    (err) => {
        if (err) {
            console.log("Database connection failed");
        } else {
            console.log("Connected to SQLite Database");
        }
    }
);

db.run(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        regno TEXT
    )
`);

module.exports = db;