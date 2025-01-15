const mysql = require("mysql2");
const fs = require("fs");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "interview_db",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

const jsonData = JSON.parse(fs.readFileSync("./data/viewData.json", "utf8"));

const insertTransaction = `
    INSERT INTO transactions (id, productID, productName, amount, customerName, status, transactionDate, createBy, createOn)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

jsonData.data.forEach((transaction) => {
    db.query(insertTransaction, [
        transaction.id,
        transaction.productID,
        transaction.productName,
        transaction.amount,
        transaction.customerName,
        transaction.status,
        transaction.transactionDate,
        transaction.createBy,
        transaction.createOn,
    ], (err, result) => {
        if (err) {
            console.error("Error inserting transaction:", err);
        } else {
            console.log("Inserted transaction with ID:", transaction.id);
        }
    });
});

db.end();