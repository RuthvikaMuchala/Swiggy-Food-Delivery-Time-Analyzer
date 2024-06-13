import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriyaniComponent } from './biriyani.component';

describe('BiriyaniComponent', () => {
  let component: BiriyaniComponent;
  let fixture: ComponentFixture<BiriyaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiriyaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiriyaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
