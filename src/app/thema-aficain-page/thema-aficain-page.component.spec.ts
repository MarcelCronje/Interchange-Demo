import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemaAficainPageComponent } from './thema-aficain-page.component';

describe('ThemaAficainPageComponent', () => {
  let component: ThemaAficainPageComponent;
  let fixture: ComponentFixture<ThemaAficainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemaAficainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemaAficainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
