import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HycComponent } from './hyc.component';

describe('HycComponent', () => {
  let component: HycComponent;
  let fixture: ComponentFixture<HycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
