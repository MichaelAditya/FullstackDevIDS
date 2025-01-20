import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditData = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        productID: "",
        productName: "",
        amount: "",
        customerName: "",
        status: 0,
        transactionDate: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/data/${id}`);
                setForm(response.data);
            } catch (error) {
                console.error("Error fetching data for edit:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/data/${id}`, form);
            alert("Data updated successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error updating data:", error);
            alert("Failed to update data.");
        }
    };

    return (
        <div>
            <h1>Edit Data</h1>
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
                <button type="submit">Update Data</button>
            </form>
        </div>
    );
};

export default EditData;
