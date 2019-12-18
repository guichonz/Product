import { Inject } from '@angular/core';

export enum ProductType {
    Entree,
    Plat,
    Dessert
}

export class Product {
    id: number;
    name: string;
    type: ProductType;
    description: string;
    stock: number;
    photo: string;
    price: number;

    constructor(options: {
        id: number;
        name: string;
        type: ProductType;
        description: string;
        stock: number;
        photo: string;
        price: number;
    }) {
        this.id = options.id;
        this.name = options.name;
        this.type = options.type;
        this.description = options.description;
        this.stock = options.stock;
        this.photo = options.photo;
        this.price = options.price;
    }
}
