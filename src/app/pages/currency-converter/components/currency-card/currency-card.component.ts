import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GenericErrorComponent } from '../../../../shared/components/generic-error/generic-error.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { ICurrency } from '../../../../shared/models/currency';
import { CurrencyCardContentComponent } from './currency-card-content/currency-card-content.component';
import { CurrencyCardFooterComponent } from './currency-card-footer/currency-card-footer.component';
import { CurrencyCardHeaderComponent } from './currency-card-header/currency-card-header.component';

@Component({
  selector: 'app-currency-card',
  standalone: true,
  imports: [CurrencyCardHeaderComponent, CurrencyCardContentComponent, CurrencyCardFooterComponent, LoaderComponent, GenericErrorComponent],
  templateUrl: './currency-card.component.html',
  styleUrl: './currency-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCardComponent {
  @Input({ required: true }) public currency!: Partial<ICurrency>;
  @Output() public handleError = new EventEmitter();
}
