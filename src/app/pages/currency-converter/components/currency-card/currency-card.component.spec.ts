import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardComponent } from './currency-card.component';
import { CurrencyCardHeaderComponent } from './currency-card-header/currency-card-header.component';
import { CurrencyCardContentComponent } from './currency-card-content/currency-card-content.component';
import { CurrencyCardFooterComponent } from './currency-card-footer/currency-card-footer.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { GenericErrorComponent } from '../../../../shared/components/generic-error/generic-error.component';
import { ICurrency } from '../../../../shared/models/currency';
describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  const mockCurrency: Partial<ICurrency> = {
    // Mock currency data
    name: 'Mock Currency',
    bid: '123.45',
    updatedAt: new Date(),
    varBid: '0.1',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CurrencyCardComponent,
        CurrencyCardHeaderComponent,
        CurrencyCardContentComponent,
        CurrencyCardFooterComponent,
        LoaderComponent,
        GenericErrorComponent,
      ]
    });
    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
