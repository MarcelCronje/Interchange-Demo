import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewPageComponent } from './map-view-page.component';

describe('MapViewPageComponent', () => {
  let component: MapViewPageComponent;
  let fixture: ComponentFixture<MapViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
