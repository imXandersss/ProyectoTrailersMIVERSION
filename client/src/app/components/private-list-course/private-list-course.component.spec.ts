import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateListCourseComponent } from './private-list-course.component';

describe('PrivateListCourseComponent', () => {
  let component: PrivateListCourseComponent;
  let fixture: ComponentFixture<PrivateListCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateListCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
