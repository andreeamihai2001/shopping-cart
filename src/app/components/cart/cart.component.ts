import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(productItem: any){
    this.cartService.removeCartItem(productItem);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
   incrementQty() {
       this.cartService.addQuantity();
   } 
   decrementQty() {
     this.cartService.subQuantity();
   }
}
