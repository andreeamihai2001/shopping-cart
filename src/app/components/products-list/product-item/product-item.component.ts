import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem!: Product

  constructor(private cartService: CartService, private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  
  addtoCart( productItem : any){
    this.cartService.addtoCart(productItem);
  }

onOpenDialogClick(){
   this.matDialog.open(DialogComponent, 
    {
      data: {
        brd: this.productItem.brand,
        ttl: this.productItem.title,
        prc: this.productItem.price,
        desc: this.productItem.description,
        cat: this.productItem.category
      }
    });
}
}
