import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  id: number;
  constructor(private route: ActivatedRoute,
              private ps: ProductService) { }

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.ps.getProduct(productId)
      .subscribe(product => this.product = product);
  }

}