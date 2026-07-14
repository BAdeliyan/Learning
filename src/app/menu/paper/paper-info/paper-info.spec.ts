import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperInfo } from './paper-info';

describe('PaperInfo', () => {
  let component: PaperInfo;
  let fixture: ComponentFixture<PaperInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PaperInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
