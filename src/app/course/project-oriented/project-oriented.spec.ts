import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOriented } from './project-oriented';

describe('ProjectOriented', () => {
  let component: ProjectOriented;
  let fixture: ComponentFixture<ProjectOriented>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOriented],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectOriented);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
