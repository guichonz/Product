import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productInfo: Array<{ product: Product, quantity: number; }> = [];
  totalAmount: number;
  totalProducts: number;

  constructor() {
    this.emptyCart();
  }

  // Ajoute / Incrémente un produit au panier
  addProduct(product: Product) {

  }

  // Décrémente / Retire un produit du panier
  removeProduct(product: Product) {

  }

  // Renvoie le contenu du panier
  getAllProducts() {
    return this.productInfo;
  }

  emptyCart() {
    this.productInfo   = [];
    this.totalAmount = 0;
    this.totalProducts = 0;
  }

}