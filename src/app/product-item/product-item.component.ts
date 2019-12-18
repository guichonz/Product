import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
