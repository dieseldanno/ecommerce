export class ProductsModel {
  constructor(id, name, image, price) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
  }
}

export class DetailsModel extends ProductsModel {
  constructor(id, name, image, price, category, description, stock) {
    super(id, name, image, price);

    this.category = category;
    this.description = description;
    this.stock = stock;
  }
}
