const db = require("../config/db");

// Get all data
exports.getAllData = (req, res) => {
    const query = "SELECT * FROM transactions";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Failed to fetch data");
        } else {
            res.json(results);
        }
    });
};

// Get detail by ID
exports.getDetailData = (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM transactions WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error fetching detail data:", err);
            res.status(500).send("Failed to fetch detail data");
        } else {
            res.json(results[0]);
        }
    });
};

// Add new data
exports.addData = (req, res) => {
    const { productID, productName, amount, customerName, status, transactionDate } = req.body;
    const query = `
        INSERT INTO transactions (productID, productName, amount, customerName, status, transactionDate, createBy, createOn)
        VALUES (?, ?, ?, ?, ?, ?, 'system', NOW())
    `;
    db.query(query, [productID, productName, amount, customerName, status, transactionDate], (err, results) => {
        if (err) {
            console.error("Error adding data:", err);
            res.status(500).send("Failed to add data");
        } else {
            res.status(201).send("Data added successfully");
        }
    });
};

// Update data by ID
exports.editData = (req, res) => {
    const { id } = req.params;
    const { productID, productName, amount, customerName, status, transactionDate } = req.body;
    const query = `
        UPDATE transactions 
        SET productID = ?, productName = ?, amount = ?, customerName = ?, status = ?, transactionDate = ?
        WHERE id = ?
    `;
    db.query(query, [productID, productName, amount, customerName, status, transactionDate, id], (err, results) => {
        if (err) {
            console.error("Error updating data:", err);
            res.status(500).send("Failed to update data");
        } else {
            res.send("Data updated successfully");
        }
    });
};

// Delete data by ID
exports.deleteData = (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM transactions WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Error deleting data:", err);
            res.status(500).send("Failed to delete data");
        } else {
            res.send("Data deleted successfully");
        }
    });
};
