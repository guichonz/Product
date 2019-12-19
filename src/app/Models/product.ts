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
    tags: any[];
    nutritionalInfo: any[];
    slug: string;

    constructor(options: {
        id: number;
        name: string;
        type: string;
        description: string;
        stock: number;
        photo: string;
        price: number;
        tags: any[];
        nutritionalInfo: any[];
        slug: string;
    }) {
        this.id = options.id;
        this.name = options.name;
        switch (options.type) {
            case 'STARTER':
                this.type = ProductType.Entree;
                break;
            case 'MAIN_COURSE':
                this.type = ProductType.Plat;
                break;
            case 'DESSERT':
                this.type = ProductType.Dessert;
                break;
            default:
                this.type = ProductType.Plat;
        }
        this.description = options.description;
        this.stock = options.stock;
        this.photo = options.photo;
        this.price = options.price;
        this.tags = options.tags;
        this.nutritionalInfo = options.nutritionalInfo;
        this.slug = options.slug;
    }
}
