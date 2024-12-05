import { useEffect, useState } from "react";
import getProductById from "../Utils/getProductById";
import { IProductDetails } from "../Models/IProductDetails";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProductDetails | null>(null);

  const loadProductById = async () => {
    if (id) {
      try {
        const data = await getProductById(Number(id));
        setProduct(data);
      } catch (error) {
        console.error("Somethin went wrong when getting data", error);
      }
    }
  };

  useEffect(() => {
    loadProductById();
  });

  return (
    <>
      <Link
        to="/products"
        className="inline-block mb-2 ml-4 mt-4 p-2 border rounded w-auto bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
      >
        Back to products
      </Link>
      <div className="border p-4 lg:flex lg:flex-row lg:gap-2 lg:m-4 lg:items-end">
        <div className="flex-1 flex">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full lg:max-w-2xl h-auto lg:max-h-2xl object-cover rounded mt-4"
          />
        </div>
        <div className="flex flex-col mt-4 lg:pr-8 lg:pl-8">
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <p className="text-xl mt-4">${product?.price}</p>
          <p className=" text-xl mt-2">{product?.description}</p>
          <p className="text-gray-700 mt-2">Category: {product?.category}</p>
          <p className="text-gray-700 mt-2">Stock: {product?.stock}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
