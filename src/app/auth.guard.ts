import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProductService } from './product.service';

export const authGuard: CanActivateFn = (route, state) => {
  const productService = inject(ProductService);
  const router = inject(Router);

  if(productService.isLogin){
    return true;
  } else {
    router.navigate(['not-found']);
    return false;
  }
  
};

// isLogin = false;
