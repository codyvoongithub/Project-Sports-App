import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsJoinedComponent } from './students-joined.component';

describe('StudentsJoinedComponent', () => {
  let component: StudentsJoinedComponent;
  let fixture: ComponentFixture<StudentsJoinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsJoinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsJoinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
