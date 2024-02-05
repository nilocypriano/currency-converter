import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardContentComponent } from './currency-card-content.component';
import { CardContentDirective } from './directives/card-content.directive';

describe('CurrencyCardContentComponent', () => {
  let component: CurrencyCardContentComponent;
  let fixture: ComponentFixture<CurrencyCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCardContentComponent, CardContentDirective]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencyCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
