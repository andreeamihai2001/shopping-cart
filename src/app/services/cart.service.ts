import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartComponent } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productItem!: any
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  cartQuantity: Subject<number> = new BehaviorSubject<number>(0);
  detailQuantityPlus: Subject<number> = new BehaviorSubject<number>(0);
  
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);

  }
  addtoCart(product : any){
   
    var mergedCartItems = Object.assign({},product, {'quantity': 1, 'items': 1})

    let alreadyExistsInCart: boolean = false;
    let existingCartItem = undefined;

    if(this.cartItemList.length > 0){

      existingCartItem = this.cartItemList.find((tempCartItem: any) => tempCartItem.id === product.id )

      alreadyExistsInCart = (existingCartItem != undefined)
    }

    if(!alreadyExistsInCart) {
    
      this.cartItemList.push(mergedCartItems); 
      this.productList.next(this.cartItemList);
    }
  
    this.getTotalPrice();
  }

  getTotalPrice(){

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    let cartProductQuantity: number = 0;
    let detailQuantity: number = 0;
    let grandTotal: number = 0;

    for(let currentCartItem of this.cartItemList){
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
      detailQuantity += currentCartItem.quantity;
    }
    cartProductQuantity += this.cartItemList.length;

    this.totalQuantity.next(totalQuantityValue);
    this.cartQuantity.next(cartProductQuantity);
    this.detailQuantityPlus.next(detailQuantity);
 }
 getFinalPrice(): number{

    let grandTotal = 0;
    this.cartItemList.map((a:any) => {
       grandTotal += a.price * a.quantity; 
    })
    return grandTotal;
  }


  removeCartItem(product : any){
    this.cartItemList.map((a:any, index: any) =>{
      if(product.id === a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = [];
    this. productList.next(this.cartItemList);
  }

  addQuantity(cartItemList: any){
    cartItemList.quantity++;
    this.getFinalPrice();
  }

  subQuantity(cartItemList: any){
    cartItemList.quantity--;

    if(cartItemList.quantity === 0){
      this.removeCartItem(cartItemList);
    }else{
       this.getFinalPrice();
    }
  }
}
