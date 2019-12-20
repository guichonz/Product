
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styles: []
})
export class CartDetailComponent implements OnInit {
  productInfo: Array<{ product: Product, quantity: number; }>;
  totalProducts: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.productInfo = this.cart.productInfo;
    this.totalProducts = this.cart.totalProducts;
  }

  getTotalAmount() {
    return this.cart.totalAmount;
  }

}