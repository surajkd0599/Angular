export class Product {
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  public category: string
  public model: string;
  public color: string;
  public delivery: string;

  constructor(
    category: string,
    name: string,
    description: string,
    imagePath: string,
    price: number,
    model: string,
    color: string,
    delivery: string
    
  ) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
    this.model = model;
    this.color = color;
    this.delivery = delivery; 
  }
}
