import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternUnionPageComponent } from './western-union-page.component';

describe('WesternUnionPageComponent', () => {
  let component: WesternUnionPageComponent;
  let fixture: ComponentFixture<WesternUnionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternUnionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternUnionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
