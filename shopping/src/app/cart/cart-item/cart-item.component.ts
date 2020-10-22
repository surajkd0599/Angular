import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}