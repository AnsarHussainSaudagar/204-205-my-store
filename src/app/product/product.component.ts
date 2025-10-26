import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productData !: Product ;

  costly : boolean = false;
  constructor(
    private productService: ProductService, private route: ActivatedRoute,
    private router: Router){
  }
  onClickNext(){
    this.router.navigate(['product', "3"], {
      queryParams: {
        'costly' : true
      }
    });
  }
  ngOnInit(){

    let id = "";

    this.route.queryParamMap.subscribe({
      next: (params) => {
        if(params.get('costly')){
          this.costly = true;
        }
      }
    })

    this.route.params.subscribe({
      next: (data) => {
        id = data['id'];
        this.productService.getSingleData(id).subscribe({
          next: (data : any) => {
            this.productData = data;
          }
        });
      }
    });
    
    
    
  }

  
}
