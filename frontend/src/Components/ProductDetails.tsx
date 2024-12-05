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
      <div className="border p-4 md:flex md:flex-row md:gap-2 md:m-4 md:items-end">
        <div className="flex md:justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="max-w-md lg:max-w-lg h-auto object-contain rounded"
          />
        </div>
        <div className="flex flex-col mt-4 md:pr-8 md:pl-2 flex-grow">
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
