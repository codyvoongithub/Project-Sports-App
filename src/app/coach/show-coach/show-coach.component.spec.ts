import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoachComponent } from './show-coach.component';

describe('ShowCoachComponent', () => {
  let component: ShowCoachComponent;
  let fixture: ComponentFixture<ShowCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
