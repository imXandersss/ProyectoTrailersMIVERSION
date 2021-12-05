import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCourseComponent } from './private-course.component';

describe('PrivateCourseComponent', () => {
  let component: PrivateCourseComponent;
  let fixture: ComponentFixture<PrivateCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
