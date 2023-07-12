import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/wishlist";

const headerConfig = {
  headers: {
    Authorization: `bearer ${localStorage.getItem("auth")}`,
  },
};

export const addToWishList = (id) => {
  const response = axios.post(`${baseUrl}/${id}`, "", headerConfig);
  return response;
};

export const removeToWishList = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`, headerConfig);
  return response;
};

export const getAllWishlist = () => {
  const response = axios.get(`${baseUrl}`, headerConfig);
  return response;
};
