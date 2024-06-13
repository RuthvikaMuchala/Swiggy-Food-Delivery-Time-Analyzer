import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtComponent } from './viewt.component';

describe('ViewtComponent', () => {
  let component: ViewtComponent;
  let fixture: ComponentFixture<ViewtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
