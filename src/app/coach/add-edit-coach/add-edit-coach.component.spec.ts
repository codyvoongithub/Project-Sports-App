import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCoachComponent } from './add-edit-coach.component';

describe('AddEditCoachComponent', () => {
  let component: AddEditCoachComponent;
  let fixture: ComponentFixture<AddEditCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
