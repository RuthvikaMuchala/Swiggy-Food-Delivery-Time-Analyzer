import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqComponent } from './viewq.component';

describe('ViewqComponent', () => {
  let component: ViewqComponent;
  let fixture: ComponentFixture<ViewqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
