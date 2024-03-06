import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapListViewPageComponent } from './map-list-view-page.component';

describe('MapListViewPageComponent', () => {
  let component: MapListViewPageComponent;
  let fixture: ComponentFixture<MapListViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapListViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
