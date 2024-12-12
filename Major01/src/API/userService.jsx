import axios from "axios";

const API_URL = "http://localhost:3000/user_data";

export const getuser = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const adduser = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const deleteuser = async (user) => {
  const response = await axios.delete(`${API_URL}/${user._id}`);
  return response.data;
}

// import axios from 'axios';

// const API_URL = 'http://localhost:3000';

// export const getuser = async () => {
//   const response = await axios.get(`${API_URL}/user_data`);
//   return response.data;
// };

// export const adduser = async (user) => {
//   await axios.post(`${API_URL}/user_data`, user);
// };
