import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFind } from './page-not-find';

describe('PageNotFind', () => {
  let component: PageNotFind;
  let fixture: ComponentFixture<PageNotFind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFind],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
