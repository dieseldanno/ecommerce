import { IProduct } from "./IProduct";

export interface IProductDetails extends IProduct {
  category: string;
  description: string;
  stock: number;
}
