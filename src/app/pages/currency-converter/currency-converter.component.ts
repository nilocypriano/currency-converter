import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { first, repeat, tap } from 'rxjs';

import { GenericErrorComponent } from '../../shared/components/generic-error/generic-error.component';
import { ICurrency, ICurrencyExchange } from '../../shared/models/currency';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { QuotationService } from './services/quotation/quotation.service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, CurrencyCardComponent, GenericErrorComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent {
  public quotationService = inject(QuotationService);

  public currencies = signal([] as Partial<ICurrency>[] | ICurrency[]);

  constructor() {
    this.setCurrencies();
  }

  public setCurrencies() {
    this.quotationService.getQuotations()
      .pipe(
        first(),
        repeat({ delay: 30000 }),
        tap((quotations: ICurrencyExchange) =>
          this.currencies.set(
            Object.values(quotations).map((currency: ICurrency) => ({
              ...currency,
              updatedAt: new Date(),
            }))
          )
        )
      )
      .subscribe({
        error: () =>
          this.currencies.set([
            { name: 'Dólar Canadense' },
            { name: 'Peso Argentino' },
            { name: 'Libra Esterlina' },
          ]),
      });
  }
}
