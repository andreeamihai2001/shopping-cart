import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  public productList : any;
  public filterCategory: any;
  searchKey: string = "";
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
   this.productService.getProduct()
   .subscribe(res=>{
     this.productList = res;
     this.filterCategory = res;
     this.productList.forEach((a:any) => {
       Object.assign(a,{quantity: 1, total:a.price});
     });
   });
   this.cartService.search.subscribe((val:any)=>{
     this.searchKey = val;
   })
  }

  filter(category: string) {
    this.filterCategory = this.productList
    .filter((a:any)=> {
      if(a.category == category || category ==''){
        return a;
      }
    })
  }
}
