import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { ProductService } from './product.service';

// exemple de map syntaxe;
const tab1 = [1,2,3];
const tab2 = tab1.map(x=> x * 2);

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productInfo: Array<{ product: Product, quantity: number; }> = [];
  productToSave : Array<{ pId: number, pQuantity: number; }> = [];
  totalAmount: number;
  totalProducts: number;

  constructor(private productService: ProductService) {
    this.initCart();
  }

  // Ajoute / Incrémente un produit au panier
  addProduct(product: Product, qty: number = 1) {
    // Le produit en cours est il déja dans le panier ?
    // const toto = this.productInfo.find(pInfo => pInfo.product.id === product.id);
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index !== -1) {
      // trouvé
      this.productInfo[index].quantity += qty; // produit + quantité
      // this.productInfo[index] = {...pInfo, quantity: pInfo.quantity + 1};

    } else {
      // pas trouvé
      this.productInfo.push({product: product, quantity: qty});
    }
    // Incrémente la quantité totale d'articles et recalcule le montant
    this.totalProducts += qty;
    this.totalAmount = this.totalAmount + (qty * product.price);

    // Enregistre dans local storage
    this.saveCart();
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
      // Décrémente la quantité totale d'articles et recalcule le montant
      this.totalProducts--;
      this.totalAmount = this.totalAmount - product.price;
    }

    // Enregistre dans local storage
    this.saveCart();
  }

  getNumForProduct(productId: number): number {
    const pInfo = this.productInfo.find(pInf => pInf.product.id === productId);
    return pInfo ? pInfo.quantity : 0 ;
  }

  // Renvoie le contenu du panier
  getAllProducts() {
    return this.productInfo;
  }

  saveCart() {
    const storageFriendly: Array<{ pId: number, pQuantity: number; }> = [];
    this.productInfo.forEach(pInfo => {
      storageFriendly.push({
        pId: pInfo.product.id,
        pQuantity: pInfo.quantity
      });
  });
  localStorage.setItem('cart', JSON.stringify(storageFriendly));
}

  initCart() {
    this.productInfo   = [];
    this.totalAmount = 0;
    this.totalProducts = 0;

    const storedCart = localStorage.getItem('cart');

    if (storedCart) { // il existe un panier dans le storage
      const storedCartObj = JSON.parse(storedCart);
      this.productService.getProducts().subscribe(products => {
        storedCartObj.forEach(cartItem => {
          const product = products.find(p => p.id === cartItem.pId);
          this.addProduct(product, cartItem.pQuantity);
          // return {
          //   product: products.find(p => p.id === cartItem.pId),
          //   quantity: cartItem.pQuantity,
          });
        console.log('storedCartObj', storedCartObj);
        console.log('result', this.productInfo);
      });
    }
  }

}
