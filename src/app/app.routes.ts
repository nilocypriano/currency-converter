import { Routes } from '@angular/router';
import { CurrencyConverterComponent } from './pages/currency-converter/currency-converter.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CurrencyConverterComponent
  },
];
