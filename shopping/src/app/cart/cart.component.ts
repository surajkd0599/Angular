import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  indexList: number[];
  product: Product[] = [];

  productChangeSub: Subscription;

  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.cartService.product;
    this.productChangeSub = this.cartService.productListChanged.subscribe(
      (product: Product[]) => {
        this.product = product;
      }
    );
    console.log("In cart : ",this.product)
  }

  ngOnDestroy() {
    this.productChangeSub.unsubscribe();
  }
}
