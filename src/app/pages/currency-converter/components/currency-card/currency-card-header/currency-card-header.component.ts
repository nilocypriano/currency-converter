import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrencyNamePipe } from './pipes/currency-name.pipe';

@Component({
  selector: 'app-currency-card-header',
  standalone: true,
  imports: [CurrencyNamePipe],
  templateUrl: './currency-card-header.component.html',
  styleUrl: './currency-card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCardHeaderComponent {
  @Input({ required: true }) headerTitle?: string;

}
