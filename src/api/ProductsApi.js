import axios from "../axios/index";


export const getProducts = async () => {
  return await axios
    .get("products", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getProductByID = async (id) => {
  return await axios.get(`products/${id}`, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};


export const getSearchProduct = async (values) => {
  return await axios.get(`products/search?query=${values}`, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
   
  });
   
};