import { Link } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import Header from "../Components/UI/Header";

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <Link
        to="/products"
        className="inline-block mb-2 ml-4 mt-4 p-2 border rounded w-auto bg-gray-400 hover:bg-gray-600 hover:text-white font-semibold"
      >
        Back to products
      </Link>
      <ProductDetails />
    </>
  );
};
export default ProductDetailsPage;
