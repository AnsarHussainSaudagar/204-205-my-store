import { Injectable, signal } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isLogin = true;

  productSubject = new Subject();
  cardCountSubject = signal(0);

  constructor(private http: HttpClient) { }
  
  API_URL = environment.apiUrl +  'products/';

  // All products
  getData(){
    return this.http.get(this.API_URL);
  }

  // New Product
  postData(productData: Product){
    return this.http.post(this.API_URL, productData);
  }

  // Delete
  deleteData(id : string){
    return this.http.delete( this.API_URL + id)
  }

  // Single product
  getSingleData(id: string){
    return this.http.get(this.API_URL + id);
  }

}
