import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalcode',
})
export class NationalCodePipe implements PipeTransform {
  transform(value: any, code: string) {
    switch (code) {
      case 'US':
        return '+1 ' + value;
      case 'AUS':
        return '+3 ' + value;
      case 'EUR':
        return '+2 ' + value;
      default:
        return '+91 ' + value;
    }

    // console.log(value);
    // return value;
  }
}
