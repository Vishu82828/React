import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:3000"
});

export const getData = () => {
    return API.get("/user_data");
}

export const addUser = (user) => {
    return API.post("/user_data", user);
}

export const delData = (id) => {
    return API.delete(`/user_data/${id}`);
}

export const updateUser = (id, updatedUser) => {
    return API.put(`/user_data/${id}`, updatedUser);
}