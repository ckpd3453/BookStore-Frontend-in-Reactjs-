import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/cart";

const headerConfig = {
  headers: {
    Authorization: `bearer ${localStorage.getItem("auth")}`,
  },
};

export const addToCart = (id) => {
  const response = axios.post(`${baseUrl}/${id}`, "", headerConfig);
  return response;
};

export const removeToCart = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`, "", headerConfig);
  return response;
};
