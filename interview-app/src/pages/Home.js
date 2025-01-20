import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/data");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const deleteData = async (id) => {
        if (window.confirm("Are you sure you want to delete this data?")) {
            try {
                await axios.delete(`/api/data/${id}`);
                setData(data.filter((item) => item.id !== id));
                alert("Data deleted successfully!");
            } catch (error) {
                console.error("Error deleting data:", error);
                alert("Failed to delete data.");
            }
        }
    };

    return (
        <div>
            <h1>Data Table</h1>
            <Link to="/add">
                <button>Add New Data</button>
            </Link>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.amount}</td>
                            <td>{item.customerName}</td>
                            <td>{item.status === 0 ? "SUCCESS" : "FAILED"}</td>
                            <td>{item.transactionDate}</td>
                            <td>
                                <Link to={`/detail/${item.id}`}>
                                    <button>View</button>
                                </Link>
                                <Link to={`/edit/${item.id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => deleteData(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
