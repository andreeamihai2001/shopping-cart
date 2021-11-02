import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

  getProduct() {
    //API
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
