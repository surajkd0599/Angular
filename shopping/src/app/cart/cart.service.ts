import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { Cart } from './cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  product: Product[] = [];
  productListChanged = new Subject<Product[]>();

  constructor(private productService: ProductService) {}
  addCart(id: number) {
    this.product.push(this.productService.getProduct(id));
    this.productListChanged.next(this.product.slice());
  }
}
