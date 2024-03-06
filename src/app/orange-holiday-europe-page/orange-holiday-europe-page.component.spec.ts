import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeHolidayEuropePageComponent } from './orange-holiday-europe-page.component';

describe('OrangeHolidayEuropePageComponent', () => {
  let component: OrangeHolidayEuropePageComponent;
  let fixture: ComponentFixture<OrangeHolidayEuropePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeHolidayEuropePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeHolidayEuropePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
