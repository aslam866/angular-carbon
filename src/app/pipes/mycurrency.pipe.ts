import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency'
})
export class MycurrencyPipe implements PipeTransform {

  transform(value?: any, args?: any): any {
    if(!value ){
      throw Error('invalid use');
    }
    return value*parseInt(args);
  
  }

}
