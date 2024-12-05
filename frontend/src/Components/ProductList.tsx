import { useState, useEffect } from "react";
import { IProduct } from "../Models/IProduct";
import getProducts from "../Utils/getProducts";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
