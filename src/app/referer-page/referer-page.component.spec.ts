import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefererPageComponent } from './referer-page.component';

describe('RefererPageComponent', () => {
  let component: RefererPageComponent;
  let fixture: ComponentFixture<RefererPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefererPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefererPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
