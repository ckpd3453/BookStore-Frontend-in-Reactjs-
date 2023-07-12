import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/books";

// const headerConfig = {
//   headers: {
//     Authorization: `bearer ${localStorage.getItem("auth")}`,
//   },
// };

export const getAllBook = (page) => {
  const response = axios.get(baseUrl, {
    params: { page: page },
    headers: {
      Authorization: `bearer ${localStorage.getItem("auth")}`,
    },
  });
  return response;
};
