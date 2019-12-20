import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';
import { Product } from '../Models/product';


@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css']
})
export class ProductButtonsComponent implements OnInit {

  constructor(private cart: CartService) {}


  @Input() numProducts: number;

  @Input() product: Product;

  ngOnInit() {}

  add(event: Event) {
    event.stopPropagation();
    this.cart.addProduct(this.product);
    this.numProducts++;
  }

  remove(event: Event) {
    event.stopPropagation();
    this.cart.removeProduct(this.product);
    this.numProducts--;
  }
}
