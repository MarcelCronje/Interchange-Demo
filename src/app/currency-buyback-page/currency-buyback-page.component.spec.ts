import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBuybackPageComponent } from './currency-buyback-page.component';

describe('CurrencyBuybackPageComponent', () => {
  let component: CurrencyBuybackPageComponent;
  let fixture: ComponentFixture<CurrencyBuybackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyBuybackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyBuybackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
