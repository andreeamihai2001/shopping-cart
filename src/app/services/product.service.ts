import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products: Product[]= [
    new Product(1, 'Product1', 'super tare 1', 100),
    new Product(2, 'Product2', 'super tare 1', 150),
    new Product(3, 'Product3', 'super tare 1', 200),
    new Product(4, 'Product4', 'super tare 1', 250),
    new Product(5, 'Product5', 'super tare 1', 50)

  ]


  constructor() { }

  getProducts(): Product[] {
    //API
    return this.products
  }
}
