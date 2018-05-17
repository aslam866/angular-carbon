import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecond'
})
export class MillisecondPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value/1000;
  }

}
