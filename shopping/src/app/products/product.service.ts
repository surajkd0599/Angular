import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productList: Product[] = [
    new Product(
      'Shoes',
      'Vans Sk8-Hi MTE Shoes',
      'The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.  ',
      'https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png',
      1250,
      'VA33TXRJ5',
      'Light green',
      'India'
    ),
    new Product(
      'Phone',
      'iPhone 12',
      "The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design. ",
      'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg',
      79900,
      'iphone 12',
      'Black',
      'India'
    ),
    new Product(
      'Shirt',
      'U.S. Polo Assn.',
      'Men Blue Tailored Fit Checked Casual Shirt,Blue checked casual shirt, has a button-down collar, long sleeves, curved hem, one patch pocket',
      'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7017615/2019/4/29/363d52ad-3bdf-4063-a885-fb53e08b38011556517279800-US-Polo-Assn-Men-Blue-Tailored-Fit-Checked-Casual-Shirt-1411-1.jpg',
      1229,
      'Regular, Casual',
      'Blue Checked',
      'India'
    ),
    new Product(
      'Television',
      'Samsung(49 Inches) 4K',
      ' Ultra HD Smart QLED TV. See true HDR in every moment Quantum HDR 4X See objects in the dark and peer deeply into the shades of colour. Quantum HDR 4X analyzes the scene frame by frame and adjusts the lighting to express the unique brightness of every moment. * The range of Quantum HDR claims luminance based on internal testing standards and is subject to change according to viewing environment or specific conditions.',
      'https://images-na.ssl-images-amazon.com/images/I/51R%2Bvo8sazL.jpg',
      73999,
      'QA49Q60RAKXXL (2019 Model)',
      'Black',
      'India'
    ),
  ];

  getProducts() {
    return this.productList.slice();
  }

  getProduct(id: number) {
    return this.productList.slice()[id];
  }
}
