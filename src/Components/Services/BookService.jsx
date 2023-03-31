import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/books";

const headerConfig = {
  headers: {
    Authorization: `bearer ${localStorage.getItem("auth")}`,
  },
};

export const getAllBook = () => {
  const response = axios.get(baseUrl, headerConfig);
  return response;
};
