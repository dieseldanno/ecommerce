import { useEffect, useState } from "react";
import getProductById from "../Utils/getProductById";
import { IProductDetails } from "../Models/IProductDetails";
import { useParams } from "react-router-dom";

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
      <div className="border p-4 lg:flex lg:flex-row lg:gap-2 lg:m-4">
        <div className="flex-1 flex">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full lg:max-w-xl h-auto object-cover rounded mt-4"
          />
        </div>
        <div className="flex flex-col lg:gap-4 lg:mt-4">
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <p className="text-xl mt-4">${product?.price}</p>
          <p className="mt-2">{product?.description}</p>
          <p className="text-gray-700 mt-2">Category: {product?.category}</p>
          <p className="text-gray-700 mt-2">Stock: {product?.stock}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
