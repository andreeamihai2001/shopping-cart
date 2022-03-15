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
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getFinalPrice();
    })
  }

  removeItem(productItem: any){
    this.cartService.removeCartItem(productItem);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
   incrementQty(productItem: any) {
       this.cartService.addQuantity(productItem);    
   } 
   decrementQty(productItem: any) {
     this.cartService.subQuantity(productItem);
   }
   checkout(){
    alert("Your order has been placed!");
   }
}
