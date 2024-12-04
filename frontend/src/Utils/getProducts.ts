// import { IProduct } from "../Models/IProduct";

const getProducts = async () => {
  const url = import.meta.env.VITE_BASE_URL;

  try {
    const response = await fetch(`${url}/products`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
};

export default getProducts;
// : IProduct[]
