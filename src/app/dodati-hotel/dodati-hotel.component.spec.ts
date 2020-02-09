import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodatiHotelComponent } from './dodati-hotel.component';

describe('DodatiHotelComponent', () => {
  let component: DodatiHotelComponent;
  let fixture: ComponentFixture<DodatiHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodatiHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodatiHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});