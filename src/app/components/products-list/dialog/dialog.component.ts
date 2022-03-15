import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() Item!: Product
  constructor(private cartService: CartService, @Inject(MAT_DIALOG_DATA) public data: {brd: string,ttl: string, prc: number, desc: string, cat: string}) { }

  ngOnInit(): void {
    
  }

}
