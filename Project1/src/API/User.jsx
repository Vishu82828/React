// import axios from 'axios';

// const API = axios.create({
//     baseURL: "http://localhost:3000"
// });

// export const getData = () => {
//     return API.get("/user");
// }

// export const addUser = (user) => {
//     return API.post("/user", user);
// }

// export const delData = (id) => {
//     return API.delete(`/user/${id}`);
// }

// export const updateUser = (id, updatedUser) => {
//     return API.put(`/user/${id}`, updatedUser);
// }

import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:3000"
});

export const getData = () => {
    return API.get("/users");
};

export const addData = (user) => {
    return API.post("/users",user);
}
