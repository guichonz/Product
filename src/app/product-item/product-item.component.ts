import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/product';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  numProducts: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
    this.numProducts = this.cart.getNumForProduct(this.product.id); // TODO: initialiser avec le panier !
  }

}
