import { CurrencyPipe } from '@angular/common';
import { Component, Input, LOCALE_ID } from '@angular/core';

import { LoaderComponent } from '../../../../../shared/components/loader/loader.component';
import { CardContentDirective } from './directives/card-content.directive';

@Component({
  selector: 'app-currency-card-content',
  standalone: true,
  imports: [CurrencyPipe, LoaderComponent, CardContentDirective],
  templateUrl: './currency-card-content.component.html',
  styleUrl: './currency-card-content.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class CurrencyCardContentComponent {
  @Input({ required: true }) price?: string
}
