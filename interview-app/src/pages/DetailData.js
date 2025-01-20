import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailData = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/data/${id}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching detail data:", error);
            }
        };
        fetchData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Detail Data</h1>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Product ID:</strong> {data.productID}</p>
            <p><strong>Product Name:</strong> {data.productName}</p>
            <p><strong>Amount:</strong> {data.amount}</p>
            <p><strong>Customer Name:</strong> {data.customerName}</p>
            <p><strong>Status:</strong> {data.status === 0 ? "SUCCESS" : "FAILED"}</p>
            <p><strong>Transaction Date:</strong> {data.transactionDate}</p>
            <p><strong>Created By:</strong> {data.createBy}</p>
            <p><strong>Created On:</strong> {data.createOn}</p>
        </div>
    );
};

export default DetailData;
