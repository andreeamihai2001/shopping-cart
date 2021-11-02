import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

}
