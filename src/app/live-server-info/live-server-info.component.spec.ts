import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveServerInfoComponent } from './live-server-info.component';

describe('LiveServerInfoComponent', () => {
  let component: LiveServerInfoComponent;
  let fixture: ComponentFixture<LiveServerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveServerInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveServerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
