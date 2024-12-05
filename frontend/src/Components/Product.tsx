import { IProduct } from "../Models/IProduct";
import { Link } from "react-router-dom";

type ProductProps = {
  product: IProduct;
};

const Product = ({ product }: ProductProps) => {
  return (
    <>
      <div className="border p-4 rounded shadow hover:shadow-lg hover:scale-105">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded"
          />
        </Link>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </>
  );
};

export default Product;
