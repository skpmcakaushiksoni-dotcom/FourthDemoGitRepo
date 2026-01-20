import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistartionComponent } from './student-registartion.component';

describe('StudentRegistartionComponent', () => {
  let component: StudentRegistartionComponent;
  let fixture: ComponentFixture<StudentRegistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRegistartionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
