import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { QuotationService } from './services/quotation/quotation.service';
import { ICurrency } from '../../shared/models/currency';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {

  public currencies$ = new BehaviorSubject<ICurrency[]>([])

  constructor(private quotationService: QuotationService) {
    this.quotationService.getQuotations()
      .subscribe(currencies => this.currencies$.next(currencies))
  }

}
