import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyName',
  standalone: true
})
export class CurrencyNamePipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    return value?.split('/').shift();
  }

}
