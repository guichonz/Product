import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../Models/product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styles: []
})
export class CartDetailComponent implements OnInit {
  productInfos: Array<{ product: Product, quantity: number; }> = [];
  totalAmount: number;
  totalProducts: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.productInfos = this.cart.getAllProducts();
    this.totalAmount = this.cart.totalAmount;
    this.totalProducts = this.cart.totalProducts;
  }

}


// productInfo: Array<{ product: Product, quantity: number; }> = [];