import axios from "axios";

const url = "http://localhost:3005/users";

const getUser = () => axios.get(url);

const getUserById = (userId) => axios.get(`${url}/${userId}`);

const editUser = (userId, user) =>
  axios.put(`${url}/${userId}`, user);

const addUser = (user) => axios.post(`${url}`, user);

const deleteUser = (userId) => axios.delete(`${url}/${userId}`);

export { getUser, getUserById, editUser, addUser, deleteUser };
