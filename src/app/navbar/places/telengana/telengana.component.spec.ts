import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelenganaComponent } from './telengana.component';

describe('TelenganaComponent', () => {
  let component: TelenganaComponent;
  let fixture: ComponentFixture<TelenganaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelenganaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelenganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
