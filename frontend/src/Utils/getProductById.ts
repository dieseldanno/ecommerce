import { IProductDetails } from "../Models/IProductDetails";

const getProductById = async (id: number): Promise<IProductDetails> => {
  const url = import.meta.env.VITE_BASE_URL;

  try {
    const response = await fetch(`${url}/products/${id}`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }
};

export default getProductById;
