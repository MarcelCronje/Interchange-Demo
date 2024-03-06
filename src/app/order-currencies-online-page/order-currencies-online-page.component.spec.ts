import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCurrenciesOnlinePageComponent } from './order-currencies-online-page.component';

describe('OrderCurrenciesOnlinePageComponent', () => {
  let component: OrderCurrenciesOnlinePageComponent;
  let fixture: ComponentFixture<OrderCurrenciesOnlinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCurrenciesOnlinePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCurrenciesOnlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
