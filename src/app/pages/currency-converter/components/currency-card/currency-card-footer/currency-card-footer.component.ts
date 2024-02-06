import { DatePipe, DecimalPipe, NgTemplateOutlet, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card-footer',
  standalone: true,
  imports: [DatePipe, DecimalPipe],
  templateUrl: './currency-card-footer.component.html',
  styleUrl: './currency-card-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyCardFooterComponent {
  @Input({ required: true }) quotationVariation?: string;
  @Input({ required: true }) updatedAt?: Date;
}
