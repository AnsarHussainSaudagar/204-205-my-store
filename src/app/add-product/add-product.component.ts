import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from '../custom.validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {

  submitted: boolean = false;
  newProduct : Product = {
    name: '',
    description: '',
    price: 0,
    img: '../../assets/images/iphone.jpeg'
  }

  productForm : FormGroup;


  constructor(private productService: ProductService, private fb: FormBuilder){
    // this.productForm = new FormGroup({
    //   'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   'description': new FormControl(''),
    //   'price': new FormControl('', [Validators.required])
    // });

    this.productForm = fb.group({
      'name': ['', [Validators.required, Validators.minLength(5), customValidator()]],
      'description': [''],
      'price': ['', [Validators.required]]
    });
  }

  onSubmit(){
    this.submitted = true;

    if(this.productForm.valid){
      this.productService
        .postData({ ...this.productForm.value, img: '../../assets/images/iphone.jpeg' })
        .subscribe({
          next: () => {
            this.productService.productSubject.next(true);
          },
        });
      this.submitted = false;
      this.productForm.reset();
    }else {
      this.productForm.markAllAsTouched();
    }
    
  }

  // onSubmit(form: NgForm){

  //   this.submitted = true;
  //   if(form.valid){
  //     this.productService
  //       .postData({ ...form.value, img: '../../assets/images/iphone.jpeg' })
  //       .subscribe({
  //         next: () => {
  //           this.productService.productSubject.next(true);
  //         },
  //       });
  //     this.submitted = false;
  //     form.reset();
  //   }
    
  // }
}
