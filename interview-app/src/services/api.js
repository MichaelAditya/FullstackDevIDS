import axios from "axios";

export const getData = async () => {
    const response = await axios.get("/api/data");
    return response.data;
};

export const getDetail = async (id) => {
    const response = await axios.get(`/api/data/${id}`);
    return response.data;
};

export const addData = async (data) => {
    const response = await axios.post("/api/data", data);
    return response.data;
};

export const updateData = async (id, data) => {
    const response = await axios.put(`/api/data/${id}`, data);
    return response.data;
};

export const deleteData = async (id) => {
    const response = await axios.delete(`/api/data/${id}`);
    return response.data;
};
