import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterChancePageComponent } from './inter-chance-page.component';

describe('InterChancePageComponent', () => {
  let component: InterChancePageComponent;
  let fixture: ComponentFixture<InterChancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterChancePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterChancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
