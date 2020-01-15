import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHoursComponent } from './current-hours.component';

describe('CurrentHoursComponent', () => {
  let component: CurrentHoursComponent;
  let fixture: ComponentFixture<CurrentHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
