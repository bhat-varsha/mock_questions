const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("gene.db", (err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to SQLite Database");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS genes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        gene_name TEXT,
        sequence TEXT
    )
`);
db.run(`
    INSERT INTO genes (gene_name, sequence)
    VALUES
    ('TP53', 'ATCGATCG'),
    ('BRCA1', 'GGCTAACC'),
    ('EGFR', 'TTGGCCAA')
`);

module.exports = db;