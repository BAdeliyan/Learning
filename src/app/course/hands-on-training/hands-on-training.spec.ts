import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsOnTraining } from './hands-on-training';

describe('HandsOnTraining', () => {
  let component: HandsOnTraining;
  let fixture: ComponentFixture<HandsOnTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandsOnTraining],
    }).compileComponents();

    fixture = TestBed.createComponent(HandsOnTraining);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
