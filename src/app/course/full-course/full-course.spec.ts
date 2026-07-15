import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCourse } from './full-course';

describe('FullCourse', () => {
  let component: FullCourse;
  let fixture: ComponentFixture<FullCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCourse],
    }).compileComponents();

    fixture = TestBed.createComponent(FullCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
