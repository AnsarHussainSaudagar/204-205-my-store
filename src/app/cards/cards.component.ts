import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  
  name = "ansar";
  products : any = [];

  

  ngOnInit(){
    
    this.updateUi();
    this.productService.productSubject.subscribe({
      next: () => {
        this.updateUi();
      }
    });
  }

  onDeleteProduct(id : string){
    this.productService.deleteData(id).subscribe({
      next: () => { 
        this.updateUi();
      }
    });
  }

  private updateUi(){
    this.productService.getData().subscribe({
      next: (products) => {
        this.products = products;
      }
    });
  }

  onAddToCart(){
    this.productService.cardCountSubject.update(v => v + 1);
  }

  constructor(private productService: ProductService, private router: Router){
    
  }

  onClickGo(product_id: string){
    this.router.navigate(['product', product_id]);
  }


}
