import express from "express";
import {
  listProducts,
  findProduct,
} from "../controllers/products-controller.mjs";

const productRoutes = express.Router();

productRoutes.route("/").get(listProducts);
productRoutes.route("/:id").get(findProduct);

export default productRoutes;
