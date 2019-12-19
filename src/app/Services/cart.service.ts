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
    // Le produit en cours est il déja dans le panier ?
    // const toto = this.productInfo.find(pInfo => pInfo.product.id === product.id);
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index !== -1) {
      // trouvé
      this.productInfo[index].quantity ++; // produit + quantité
      // this.productInfo[index] = {...pInfo, quantity: pInfo.quantity + 1};

    } else {
      // pas trouvé
      this.productInfo.push({product: product, quantity: 1});
    }

  }

  // Décrémente / Retire un produit du panier
  removeProduct(product: Product) {
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index !== -1) {
      // trouvé
      this.productInfo[index].quantity --; // produit + quantité
      if (this.productInfo[index].quantity === 0) {
        this.productInfo.splice(index, 1);
      }
    }
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
