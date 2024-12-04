import { ProductsModel, DetailsModel } from "../models/ProductsModel.mjs";
import { fetchData } from "../utils/httpClient.mjs";

export const listProducts = async (res, req) => {
  try {
    const response = await fetchData("http://localhost:5000/products");
    const products = [];

    response.results.map((product) => {
      products.push(
        new ProductsModel(
          product.id,
          product.name,
          product.image,
          product.price
        )
      );
    });

    res.status(200).json({
      success: true,
      result: {
        data: products,
      },
    });
    return;
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

export const findProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetchData(`http://localhost:5000/products/${id}`);

    const product = new DetailsModel(
      response.id,
      response.name,
      response.price,
      response.image,
      response.category,
      response.description,
      response.stock
    );

    res.status(200).json({ status: true, result: product });

    return;
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};
