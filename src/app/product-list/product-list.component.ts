import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product, ProductType } from '../Models/product';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})

export class ProductListComponent implements OnInit {
  products: Product[];
  starters: Product[];
  mainCourses: Product[];
  desserts: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(data => {
      this.products = data;
      this.starters =  this.products.filter(p => p.type === ProductType.Entree);
      this.mainCourses =  this.products.filter(p => p.type === ProductType.Entree);
      this.desserts =  this.products.filter(p => p.type === ProductType.Dessert);
    });

  }

}
