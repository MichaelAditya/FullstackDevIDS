import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddData = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        productID: "",
        productName: "",
        amount: "",
        customerName: "",
        status: 0,
        transactionDate: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/data", form);
            alert("Data added successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error adding data:", error);
            alert("Failed to add data.");
        }
    };

    return (
        <div>
            <h1>Add New Data</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product ID"
                    value={form.productID}
                    onChange={(e) => setForm({ ...form, productID: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    value={form.productName}
                    onChange={(e) => setForm({ ...form, productName: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={form.customerName}
                    onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                />
                <input
                    type="datetime-local"
                    value={form.transactionDate}
                    onChange={(e) => setForm({ ...form, transactionDate: e.target.value })}
                />
                <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: Number(e.target.value) })}
                >
                    <option value={0}>SUCCESS</option>
                    <option value={1}>FAILED</option>
                </select>
                <button type="submit">Add Data</button>
            </form>
        </div>
    );
};

export default AddData;
