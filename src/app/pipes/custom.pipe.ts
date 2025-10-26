import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product.model';

@Pipe({
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform {

  transform(value: Product[], ...args: any[]): Product[] {
    const filteredProducts = value.filter((product : Product) => {
      return product.price < args[0]
    });
    return filteredProducts;
  }

}
