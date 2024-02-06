import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConverterComponent } from './currency-converter.component';
import { GenericErrorComponent } from '../../shared/components/generic-error/generic-error.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrencyConverterComponent', () => {
  let component: CurrencyConverterComponent;
  let fixture: ComponentFixture<CurrencyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CurrencyConverterComponent, GenericErrorComponent, CurrencyCardComponent, GenericErrorComponent, CurrencyCardComponent, HttpClientTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
