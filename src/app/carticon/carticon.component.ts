import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styles: []
})
export class CarticonComponent implements OnInit {
  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  getTotalProducts(){
    return this.cart.totalProducts;
  }
}
