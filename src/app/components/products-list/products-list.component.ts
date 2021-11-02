import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  public productList : any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.productService.getProduct()
   .subscribe(res=>{
     this.productList = res;
   })
  }

}
